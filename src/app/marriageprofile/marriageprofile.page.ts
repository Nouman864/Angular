import {ActivatedRoute} from '@angular/router';
import {FormGroup, FormBuilder, Validators} from '@angular/forms';
import {AlertController,ModalController} from '@ionic/angular';
import { Component, OnInit, Input } from '@angular/core';
import { BooksService } from '../sdk/custom/books.service';
import { AuthService } from '../sdk/core/auth.service';
import * as jwt_decode from 'jwt-decode';
import { Router } from '@angular/router';
@Component({
  selector: 'app-marriageprofile',
  templateUrl: './marriageprofile.page.html',
  styleUrls: ['./marriageprofile.page.scss'],
})
export class MarriageprofilePage implements OnInit {

  c1 = '';  c2 = '';  c3 = '';  c4 = ''; c5 = ''; c6 = '';

  n1 = 'star-outline';n2 = 'star-outline';n3 = 'star-outline';n4 = 'star-outline'; n5 = 'star-outline'; n6;n7;
star: number;
  loading: boolean;
  resturants: Resturants[];
  data: any;
  images: any[];
  brek: any;
  launh: any;
  dnner: any;
  showtable: any;
  menus: any;
  tb: any;
  deleteLoading: boolean;
  selectedBook: any;
  value: any;
  halls: any;
  men1: any;
  men2: any;
  menucharge1: any;
  menucharge2: any;
  imagess: any[];
  constructor(private booksService: BooksService, private router: Router,private route: ActivatedRoute,private authService: AuthService, private formBuilder: FormBuilder,private modalController: ModalController,private alertController: AlertController) {}
  
  form: FormGroup;
  ionViewWillEnter() {
    this. ngOnInit();
}
  ngOnInit() {
    this.formInitializer();
    this.route.queryParams.subscribe((params)=>{
    console.log(params);
    this.data = JSON.parse(params.data);
    if (this.data) {
      console.log('got hall', this.data);
      console.log(this.data._id);
      this.value = this.data.reviewsTotal;
      this.form.patchValue({name : this.data.name});
      this.form.patchValue({city : this.data.city});
      this.form.patchValue({number : this.data.number});
      this.form.patchValue({Location : this.data.Location});
      this.form.patchValue({check: this.data.check});
      this.form.patchValue({about: this.data.about});
      this.form.patchValue({open: this.data.open});
      this.form.patchValue({close: this.data.close});
      this.form.patchValue({email: this.data.email});
      this.form.patchValue({charges: this.data.charges});
      this.imagess =[];
      
    for (var i = 0; i < this.data.images.length; i++)
     {
      
     this.imagess[i] = this.data.images[i];
   
    }
      
    }
    })
  
    this.get();
    // this.gettable();
    // this.checktable();
 
  }
  async get() {
    this.loading = true;
   let halid = this.data._id;
    let owner;
    const ownerId =  await this.authService. getTokenFromStorage();
    try{
      const decoded = jwt_decode(ownerId );
      owner = decoded['data']._id;
    }
    catch(ex){
    }
    
    const observable = await this.booksService.gethalmenu(
      halid
    );
    observable.subscribe(
      data => {
        this.halls = data.data;
        this.loading = false;
      console.log(this.halls);
        this.men1 = this.halls[0].menu1;
        this.men2 = this.halls[0].menu2;
       this. menucharge1 = this.halls[0].menucharge1;
        this.menucharge2 = this.halls[0].menucharge2;
        // this.dnner = this.resturants[0].dinner;
        // console.log(this.brek);
        // console.log(this.launh);
        // console.log(this.dnner);
    
      }, 
      err => {
        console.log('err', err);
      } 
    ); 
  }

  async gettable() {
    this.loading = true;
    let owner1 = this.data._id;
    const ownerId =  await this.authService. getTokenFromStorage();
    console.log(ownerId);
    try{
      const decoded = jwt_decode(ownerId );
     let owner = decoded['data']._id;
    }
    catch(ex){
    }
    console.log(owner1);
    const observable = await this.booksService.gettable(
      owner1
    );
    observable.subscribe(
      data => {
        this.menus = data.data;
        this.loading = false;
        console.log( data);
        if(data.data.length > 0)
        {
         console.log(data.data[0]._id);
        this.showtable = data.data[0].Ta;
        console.log(this.showtable);
        }
  
      }, 
      err => {
        console.log('err', err);
      } 
    );
  }
  async checktable() {
    this.loading = true;
    let owner1 = this.data._id;
    const ownerId =  await this.authService. getTokenFromStorage();
    console.log(ownerId);
    try{
      const decoded = jwt_decode(ownerId );
     let owner = decoded['data']._id;
    }
    catch(ex){
    }
    console.log(owner1);
    let obj = {};

    obj['idd'] = owner1;
    const observable = await this.booksService.checktable(
      obj
    );
    observable.subscribe(
      data => {
    
        this.loading = false;
        console.log(data.message);
      this.tb = data.message;
            
      }, 
      err => {
        console.log('err', err);
      } 
    );
  }



  formInitializer() {
    
    this.form = this.formBuilder.group({
    
      name : [null, [Validators.required, Validators.minLength(1),Validators.pattern('^[a-zA-Z ]*$')]],
      city: [null, [Validators.required]],
      check: [null, [Validators.required]],
      open: [null, [Validators.required]],
      email: [null, [Validators.required,Validators.email]],
      number: [null, [Validators.required, Validators.minLength(11),Validators.pattern(/^[0-9]\d*$/)]],
      Location :  [null, [Validators.required]],
      images:  [null, [Validators.required]],
      charges: [null, [Validators.required, Validators.minLength(1),Validators.pattern(/^[0-9]\d*$/)]],
      about : [null, [Validators.required, Validators.minLength(6), Validators.pattern('^[a-zA-Z ]*$')]],
      // Lat :  [null, [Validators.required]],
      // Lng :  [null, [Validators.required]],
      });
  }






  async delete(data) {
  
    console.log(data._id);
    const alert = await this.alertController.create({
      header: 'Confirm!',
      message: `Are you sure you want to delete the table`,
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
            this.deleteBook(data);
          }
        }
      ]
    });
    await alert.present();
  }

  async deleteBook(data) {
    this.deleteLoading = true;
  console.log(data._id);
    const observable = await this.booksService.deletereservetable(data._id);

    observable.subscribe(
      data => {
        console.log('got response from server', data);
        this.deleteLoading = false;
        this.checktable();
      },
      error => {
        this.deleteLoading = false;
        console.log('error', error);
      }
    );
  }

  clickFirst(item: any) {
    this.star = item;
    console.log('this.stars', this.star);
    this.c1 = ''; this.c2 = ''; this.c3 = ''; 
    this.c4 = ''; this.c5 = '';
 this.n1 = 'star'; 
 }
 click2nd(item: any) {
  this.star = item;
  console.log('this.stars', this.star);
     this.c1 = ''; this.c2 = ''; this.c3 = ''; 
     this.c4 = ''; this.c5 = '';
     this.n1 = 'star'; this.n2 = 'star'; 
   }
   click3rd(item: any) {
     this.star = item;
     console.log('this.stars', this.star);
     
     this.c1 = '';    this.c2 = '';
     this.c3 = ''; this.c5 = '';
     this.n1 = 'star'; this.n2 = 'star'; this.n3 = 'star';
        
     
    
     }
     click4th(item: any) {
         this.star = item;
       console.log('this.stars', this.star);
       this.c1 = '';    this.c2 = '';
       this.c3 = '';    this.c4 = '';
       this.c5 = '';
       this.n1 = 'star'; this.n2 = 'star'; this.n3 = 'star'; this.n4 = 'star';

     
       }
       click5th(item: any) {
        this.star = item;
      console.log('this.stars', this.star);
      this.c1 = '';    this.c2 = '';
      this.c3 = '';    this.c4 = '';
      this.c5 = '';
      this.n1 = 'star'; this.n2 = 'star'; this.n3 = 'star'; this.n4 = 'star'; this.n5 = 'star';

    
      }
      click2half(item: any)
      {
        this.star = item;
        console.log('this.stars', this.star);
           this.c1 = ''; this.c2 = ''; this.c3 = ''; 
           this.c4 = '';  this.c5 = ''; 
           this.n1 = 'star'; this.n2 = 'star'; this.n3 = 'star-half';
         }

         click3half(item: any) {
          this.star = item;
          console.log('this.stars', this.star);
          this.c1 = '';    this.c2 = '';
          this.c3 = '';   this.c4 = '';  this.c5 = '';
          this.n1 = 'star'; this.n2 = 'star'; this.n3 = 'star'; this.n4 = 'star-half';
             
          }
          click4half(item: any) {
            this.star = item;
            console.log('this.stars', this.star);
            this.c1 = '';    this.c2 = '';
            this.c3 = '';   this.c4 = '';  this.c5 = '';
            this.n1 = 'star'; this.n2 = 'star'; this.n3 = 'star'; this.n4 = 'star';this.n5 = 'star-half';
               
            }



}
interface Resturants {
  dinner: any;
  launch: any;
  breakfast: any;
  name: string;
  ibn: string;
  _id: string;
  reviewsTotal:string;
  image_url: string;
  author: string;
  is_deleted: boolean;
}