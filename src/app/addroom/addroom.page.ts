import {create} from '@angular/language-service';
import {Input, ElementRef, ViewChild} from '@angular/core/';
import { File } from '@ionic-native/file/ngx';
import { Component, OnInit } from '@angular/core';
import { Validators, FormGroup, FormBuilder } from '@angular/forms';
import { UserService } from '../sdk/custom/user.service';
import { AlertController, ToastController, Platform } from '@ionic/angular';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthService } from '../sdk/core/auth.service';
import * as jwt_decode from 'jwt-decode';
import { BooksService } from '../sdk/custom/books.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-addroom',
  templateUrl: './addroom.page.html',
  styleUrls: ['./addroom.page.scss'],
})
export class AddroomPage implements OnInit {
  @ViewChild('fileInput', {static: false}) fileInput: ElementRef;
  roomtype: any;
  roomcategory: any;
  data: any;
  obj:any;
  info =[];
  multipleImages = [];
  tabll =[];
  loading = false;
  faci: any;
  id: any;
  imag: any;
  update: any;
  modalCtrl: any;
  rooms: any;
  ROMMID: any;
  i = 0;
  l = 0;
  updateitem: any[];
 
  constructor(private formBuilder: FormBuilder,private userService:UserService,private booksService: BooksService,private alertCtrl: AlertController,private router: Router,private route: ActivatedRoute, private authService: AuthService,
    private file: File,private toastController: ToastController,private platform: Platform,private http: HttpClient)
   {
      
  }
  form: FormGroup;





  selectMultipleImage(event){
    if (event.target.files.length > 0) {
      this.multipleImages = event.target.files;
    }
  }
  
  onMultipleSubmit(){
    const formData = new FormData();
    for(let img of this.multipleImages){
      console.log(img);
      formData.append('files', img);
    
    }
   
    this.http.post<any>('http://localhost:3000/hotelimage', formData).subscribe(
      
      async (data) =>{
        console.log(data);
        this.imag =  data['image'];
        if(data)
        {
          const toast = await this.toastController.create({
            message: `${name} Image has been added successfully.`,
            duration: 3500
          });
          toast.present();
        }
      },
      
      (err) => console.log(err)
    );
  }

  ionViewWillEnter() {
    this. ngOnInit();
}
  ngOnInit() {

    this.formInitializer();
    this.route.queryParams.subscribe((params)=>{
      //console.log(params);
      this.id = JSON.parse(params.data);
        console.log(this.id);
        // if (this.id) {
        //   console.log('got room', this.id);
        //   this.form.patchValue({roomno: this.id.Roomsinfo[0].roomno});
        //   this.form.patchValue({beds : this.id.Roomsinfo[0].beds});
        //   this.form.patchValue({nightstay : this.id.Roomsinfo[0].nightstay});
        //   this.form.patchValue({amount : this.id.Roomsinfo[0].amount});
        //   this.id = this.data._id;
        // }
      });
      this.getroom();
  }
  
  async getroom() {
   
    let owner1 = this.id;
    const ownerId =  await this.authService. getTokenFromStorage();
    console.log(ownerId);
    try{
      const decoded = jwt_decode(ownerId );
     let owner = decoded['data']._id;
    }
    catch(ex){
    }
    console.log(owner1);
    const observable = await this.booksService.getmultipleroom(
      owner1
    );
    observable.subscribe(
      uppt => {
        this.rooms = uppt.data;
        this.loading = false;
      console.log( uppt);
         console.log(uppt.data[0]._id);
        this.ROMMID = uppt.data[0]._id;
      }, 
      err => {
        console.log('err', err);
      } 
    );
  }

  formInitializer() {
    
    this.form = this.formBuilder.group({
     roomno : [null,[Validators.minLength(1)]],
      beds: [null,[Validators.minLength(1)]],
      facility:[null],
      amount: [null,[Validators.minLength(4)]]
      });
      
  }
  updateinfo()
  {
        this.updateitem = [];
    let item = this.form.value;
    item['facility'] = this.tabll;
    item['image'] = this.imag;
     this.updateitem.push(item);
     console.log(this.updateitem);
        this.form.reset();
        this.updateroom();
  
    }
   
  
 

Roominfo()
{
 
  let item = this.form.value;
  item['facility'] = this.tabll;
  item['image'] = this.imag;
  this.tabll = [];
  console.log(item);
  console.log(this.i);
  if( this.i == 1)
  {
     console.log(this.info);
     for(let j = 0; j<this.info.length; j++)
     {
      if(this.info[j].roomno == item.roomno )
      {
         console.log("roomno already booked");
         window.alert('Room alraedy Added please add another');
         return ;
      }
  }
      this.info.push(item);
      
      this.form.reset();
      


  }
  else
  {
    console.log("bbbbbb");
  this.info.push(item);
    this.i = 1;
  this.form.reset();
  }
   console.log(this.info);
}


facility()
{
  let avail = this.form.value;
  this.faci = avail.facility;
  if( this.l == 1)
  {
         console.log(this.tabll.length);
     for(let k = 0; k<this.tabll.length; k++)
     {
      if(this.tabll[k] == this.faci)
      {

         window.alert('Facility alraedy Added please add another');
         return ;
      }
     }
     this.tabll.push(
      this.faci
    );
      //this.form.reset();
      


  }
  else
  {
    this.tabll.push(
      this.faci
    );
    this.l = 1;
  //this.form.reset();
  }

  console.log(this.tabll);
}



    async room() {
      let owner;
    const ownerId =  await this.authService. getTokenFromStorage();
    try{
      const decoded = jwt_decode(ownerId );
      owner = decoded['data']._id;
    }
    catch(ex){
    }
     const obj = this.form.value;
        obj['Roomsinfo'] = this.info;
        // obj['img'] = this.imag;
        obj['hotelid'] = this.id;
        obj['owner'] = owner;
       const observable = await this.booksService.addRoom(
         obj
       );
       observable.subscribe(
         async data => {
           console.log('got response from server', data);
        const toast = await this.toastController.create({
          message: `Room has been added successfully.`,
          duration: 3500
        });
        toast.present();
           this.loading = false;
          
           
   
         },
         error => {
           this.loading = false;
           console.log('error', error);
         }
       );
    }




    async updateroom() {
      let owner;
      const ownerId =  await this.authService. getTokenFromStorage();
      try{
        const decoded = jwt_decode(ownerId );
        owner = decoded['data']._id;
      }
      catch(ex){
      }
      const ob = this.form.value;
        ob['_id'] = this.ROMMID;
        
        ob['Roomsinfo'] = this.updateitem;
      const observable = await this.booksService.updateroom(
        ob
      );
  
      observable.subscribe(
        async data => {
          console.log('got response from server', data);
          //const name = this.form.controls['name'].value;
          //this.authService.saveTokenToStorage(data.token);
          // const toast = await this.toastController.create({
          //   message: `${name} has been updated successfully.`,
          //   duration: 3500
          // });
          //toast.present();
          this.loading = false;
          this.form.reset();
          //optional
  
         // this.modalCtrl.dismiss();
        },
        error => {
          this.loading = false;
          console.log('error', error);
        }
      );
    }


    save()
    {
       // this.updateroom();
        this.room();
    }

}
