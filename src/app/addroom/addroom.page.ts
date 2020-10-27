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
  pic: any;
  rm: any;
  images: any;
  deleteLoading: boolean;
  img: any[];
 
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
         if(this.rooms.length > 0)
         {
        
         console.log(this.rooms);
         this.rm = this.rooms[0].Roomsinfo;
        this.ROMMID = uppt.data[0]._id;
        
           for(let data of this.rooms[0].Roomsinfo)
           {
                  this.images = data.image;
           }
        
           console.log(this.images);
         }
      }, 
      err => {
        console.log('err', err);
      } 
    );
  }

  formInitializer() {
    
    this.form = this.formBuilder.group({
     roomno : [null,[Validators.minLength(1), Validators.pattern(/^[0-9]\d*$/)]],
      beds: [null,[Validators.minLength(1),Validators.pattern(/^[0-9]\d*$/)]],
      facility:[null],
      images:[null],
      amount: [null,[Validators.minLength(4),Validators.pattern(/^[0-9]\d*$/)]]
      });
      
  }
  // updateinfo()
  // {
  //       this.updateitem = [];
  //   let item = this.form.value;
  //   let amnt = item.amount;
  //    let bed = item.beds
  //   if(!Number(amnt))
  //   {
  //     window.alert('sorry,put Number ');
  //       return ;
  //   }
  //   if(!Number(bed))
  //   {
  //     window.alert('sorry,put Number ');
  //       return ;
  //   }
  //   item['facility'] = this.tabll;
  //   item['image'] = this.imag;
  //    this.updateitem.push(item);
  //    console.log(this.updateitem);
  //       this.form.reset();
  //        this.updateroom();
  
  //   }
   
  
 

Roominfo()
{
 
  let item = this.form.value;
     let amnt = item.amount;
     let bed = item.beds
    if(!Number(amnt))
    {
      window.alert('sorry,put Number ');
        return ;
    }
    if(!Number(bed))
    {
      window.alert('sorry,put Number ');
        return ;
    }
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
    avail.facility = '';
      


  }
  else
  {
    this.tabll.push(
      this.faci
    );
    this.l = 1;
    avail.facility = '';
   
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
        // obj['image'] = this.imag;
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
        this.router.navigate(['/gethotel']);
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
       ob['image'] = this.imag;
        ob['_id'] = this.ROMMID;
        ob['Roomsinfo'] = this.tabll;
      
      
      const observable = await this.booksService.updateroom(
        ob
      );
  
      observable.subscribe(
        async data => {
          console.log('got response from server', data);
          const toast = await this.toastController.create({
            message: `Room has been updated successfully.`,
            duration: 3500
          });
          toast.present();
          this.form.reset();
          this.getroom();
          this.tabll = [];
          //optional
  
         // this.modalCtrl.dismiss();
        },
        error => {
          this.loading = false;
          console.log('error', error);
        }
      );
    }

del(data,i)
 {
  console.log(data);
  console.log(i);
  // console.log(this.breakfast.length);
           let dih = data.roomno;
            for(let k = 0; k <this.info.length; k++)
           {

          if(this.info[k].roomno == dih)
          {
            this.info.splice(k, 1);
          }

           }
     console.log(this.info);  
 }
    
    
    Edit(data,i)
    {
      console.log(data);
      this.img =[];
      for (let ii = 0; ii < data.image.length; ii++)
       {
        
          this.imag = data.image[ii];
     
      }
            console.log(this.imag);
        this.form.patchValue({roomno: data.roomno});
        this.form.patchValue({beds : data.beds});
        this.form.patchValue({amount : data.amount});
        for(let l = 0; l <data.facility.length; l++)
        {
          this.form.patchValue({ facility : data.facility[l]});    
        }
    }
    save()
    {
       // this.updateroom();
        this.room();
    }



    async new()
    { 
      for (let data of this.rm)
       {
                if(data.roomno == this.form.value.roomno)
                {
                  window.alert('already added  ');
                  return ;
                }
       }
      let owner;
      const ownerId =  await this.authService. getTokenFromStorage();
      try{
        const decoded = jwt_decode(ownerId );
        owner = decoded['data']._id;
      }
      catch(ex){
      }
       const obj = this.form.value;
          obj['facility'] = this.tabll;
          obj['image'] = this.imag;
          this.info.push(obj);
          let obb = {};
          obb['Roomsinfo'] = this.info;
          obb['_id'] = this.ROMMID;
         const observable = await this.booksService.newroom(
           obb
         );
         observable.subscribe(
           async data => {
             console.log('got response from server', data);
          const toast = await this.toastController.create({
            message: `Room has been added successfully.`,
            duration: 3500
          });
          toast.present();
          this.tabll = [];
          this.getroom();
          this.loading = false;
            
             
     
           },
           error => {
             this.loading = false;
             console.log('error', error);
           }
         );

    }







    async delete(data,i) {
      console.log(data);
      console.log(i);
      let ob = data;
      ob['_id'] = this.ROMMID;
      // ob['tabel'] = data.tabel;
      // ob['type'] = data.type;
      // ob['capacity'] = data.capacity;
      const alert = await this.alertCtrl.create({
        header: 'Confirm!',
        message: `Are you sure you want to delete the Room "${data.roomno}"`,
        buttons: [
          {
            text: 'Cancel',
            role: 'cancel',
            cssClass: 'secondary',
            handler: blah => {
              console.log('Confirm Cancel: blah');
            }
          },
          {
            text: 'Okay',
            handler: () => {
              this.deletetable(ob);
            }
          }
        ]
      });
      await alert.present();
    }
    
    async deletetable(ob) {
      const observable = await this.booksService.deleteroom(
        ob);
    
      observable.subscribe(
        data => {
          console.log('got response from server', data);
          window.alert('Delete successfully');
          this.getroom();
          this.deleteLoading = false;
          
        },
        error => {
          this.deleteLoading = false;
          console.log('error', error);
        }
      );
     
    }
}
