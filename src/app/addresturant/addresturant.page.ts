
import {AuthService} from '../sdk/core/auth.service';
import {Input, ElementRef, ViewChild} from '@angular/core/';
import {ToastController, ModalController, Platform} from '@ionic/angular';
import {FormBuilder} from '@angular/forms/';
import {Router, ActivatedRoute} from '@angular/router/';
import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators } from '@angular/forms';
import { BooksService } from '../sdk/custom/books.service';
import { PlaceLocation } from './location.model';
import * as jwt_decode from 'jwt-decode';
import { __param } from 'tslib';
import { File } from '@ionic-native/file/ngx';
import { toBase64String } from '@angular/compiler/src/output/source_map';
import { HttpClient } from '@angular/common/http';
import { UserService } from '../sdk/custom/user.service';
import { async } from 'q';
@Component({
  selector: 'app-addresturant',
  templateUrl: './addresturant.page.html',
  styleUrls: ['./addresturant.page.scss'],
})
export class AddresturantPage implements OnInit {

  @ViewChild('fileInput', {static: false}) fileInput: ElementRef;
  images: any;
usePicker = false;
multipleImages = [];
  iddd: any;
  flatid: any;
  flatcity: any;
  url: any;
  resturantid: any;
  dataa: Event;
  time: any;
  tabl=[];
  mealid: any;
  img = [];
  IMAGE: any[];
  resturants: Resturants[];
  arr: any[];
  id: any;

  constructor(private formBuilder: FormBuilder,private router: Router,private route: ActivatedRoute,private authService: AuthService,private modalCtrl: ModalController,
    private toastController: ToastController,
    private booksService: BooksService, private file: File,private platform: Platform,private http: HttpClient,
    private userService:UserService) 
    {
               
    }
   
    selectMultipleImage(event){
      if (event.target.files.length > 0) {
        this.multipleImages = event.target.files;
      }
    }
    
    onMultipleSubmit(){
      const formData = new FormData();
    //  console.log(this.flatid);
      for(let img of this.multipleImages){
        console.log(img);
        formData.append('files', img);
        // formData.append('ID', this.flatid);
      }
     
      this.http.post('http://localhost:3000/upload_rest', formData).subscribe(
        
        async (data) =>{
           console.log(data);
          this.img = (data['image']);
        
      
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
    

  form: FormGroup;
  data:any;
  loading = false;
  

  ngOnInit() {
    this.formInitializer();
    this.route.queryParams.subscribe((params)=>{
    console.log(params);
    this.data = JSON.parse(params.data);
    if (this.data) {
      console.log('got flat', this.data);
      console.log(this.data._id);
      this.mealid = this.data._id;
      this.id = this.data._id;
      this.form.patchValue(this.data);
    }
    })
  
    console.log('Mobile:', this.platform.is('mobile'));
    console.log('Hybrid:', this.platform.is('hybrid'));
    console.log('iOS:', this.platform.is('ios'));
    console.log('Android:', this.platform.is('android'));
    console.log('Desktop:', this.platform.is('desktop'));
    if((this.platform.is('mobile') && !this.platform.is('hybrid')) || this.platform.is('desktop'))
    {
      this.usePicker = true;
      
    }
 
  }
  formInitializer() {
    
    this.form = this.formBuilder.group({
    
      name : [null, [Validators.required, Validators.minLength(6),Validators.pattern('^[a-zA-Z ]*$')]],
      city: [null, [Validators.required]],
      check: [null, [Validators.required]],
      open: [null, [Validators.required]],
      close:[null, [Validators.required]],
      number: [null, [Validators.required, Validators.minLength(11),Validators.pattern(/^[0-9]\d*$/)]],
      Location :  [null, [Validators.required]],
      images:  [null, [Validators.required]],
      about : [null, [Validators.required, Validators.minLength(6), Validators.pattern('^[a-zA-Z ]*$')]],
      // Lat :  [null, [Validators.required]],
      // Lng :  [null, [Validators.required]],
      });
  }
  onLocationPicked(location: PlaceLocation)
  {
    console.log(location);
      this.form.patchValue({Location : location.address});
      //this.form.patchValue({Lat : location.lat});
      // this.form.patchValue({Lng : location.lng});
       
  }

  // table()
  // {
  //      let open = this.time;
  //      this.tabl.push({
  //        Timing: open
  //       });
  //       this.time = '';
  //      console.log(this.tabl);
  // }
  
  

  async addNew() {
    
     
    console.log(this.img);
   let owner;
    const ownerId =  await this.authService. getTokenFromStorage();
    const decoded = jwt_decode(ownerId );
    try{
      const decoded = jwt_decode(ownerId );
      owner = decoded['data']._id;
    }
    catch(ex){
    }
    
  
    const obj =  this.form.value;
    obj['owner'] = owner;
    obj['image'] = this.img;
    const observable = await this.booksService.addresturant(
      obj
    );
    observable.subscribe(
      async data => {
        console.log('got response from server', data);
        //console.log(data);
        this.resturantid = data.result._id;
        console.log(this.resturantid);
        const name = this.form.controls['name'].value;
        const toast = await this.toastController.create({
          message: `${name} has been added successfully.`,
          duration: 3500
        });
        toast.present();
        this.loading = false;
        this.form.reset();
      //   this.router.navigate(['/addmenu'],{
      //     queryParams:{data:JSON.stringify(this.resturantid )}
      // });
        //optional

      },
      error => {
        this.loading = false;
        console.log('error', error);
      }
    );
   }
       
  async updateresturant() {
    console.log("jnkj");
    const obj = this.form.value;
    obj['image'] = this.img;
    obj['_id'] = this.id;
    const observable = await this.booksService.updateresturant(
      obj
    );
    console.log("jnkj");
    observable.subscribe(
      
      async data => {
        console.log("jnkj");
        console.log('got response from server', data);
        console.log("jnkj");
        console.log(data);
        const name = this.form.controls['name'].value;
        //this.authService.saveTokenToStorage(data.token);
        const toast = await this.toastController.create({
          message: `${name} has been updated successfully.`,
          duration: 3500
        });
        toast.present();
        this.loading = false;
        this.form.reset();
        this.router.navigate(['/addmenu'],{
          queryParams:{data:JSON.stringify(this.mealid)}
      });
        this.modalCtrl.dismiss();
      },
      error => {
        this.loading = false;
        console.log('error', error);
      }
    );
  }
  

resturant(event: Event)
{
  this.dataa = event;
  console.log(this.dataa);
  this.router.navigate(['/addmenu'],{
      queryParams:{data:JSON.stringify(this.mealid)}
  });

}



  save() {
    this.loading = true;
    
    if (this.data) {
      console.log("jnkj");
      this.updateresturant();
      console.log("jnkj");
    }
     else 
    {
      this.addNew();
    }
  }
}

interface Resturants {
  name: string;
  ibn: string;
  _id: string;
  reviewsTotal:string;
  image_url: string;
  author: string;
  is_deleted: boolean;
}