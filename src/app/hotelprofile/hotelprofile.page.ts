import {ActivatedRoute} from '@angular/router';
import {FormGroup, FormBuilder, Validators} from '@angular/forms';
import {AlertController,ModalController} from '@ionic/angular';
import { Component, OnInit, Input } from '@angular/core';
import { BooksService } from '../sdk/custom/books.service';
import { AuthService } from '../sdk/core/auth.service';
import * as jwt_decode from 'jwt-decode';
import { Router } from '@angular/router';
@Component({
  selector: 'app-hotelprofile',
  templateUrl: './hotelprofile.page.html',
  styleUrls: ['./hotelprofile.page.scss'],
})
export class HotelprofilePage implements OnInit {
  c1 = '';  c2 = '';  c3 = '';  c4 = ''; c5 = ''; c6 = '';

  n1 = 'star-outline';n2 = 'star-outline';n3 = 'star-outline';n4 = 'star-outline'; n5 = 'star-outline'; n6;n7;
star: number;
  loading: boolean;
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
  rent: any;
  showdate: any;
  value: any;
  rooms: any;
  rm: any;
  ROMMID: any;
  id: any;
  constructor(private booksService: BooksService, private router: Router,private route: ActivatedRoute,private authService: AuthService, private formBuilder: FormBuilder,private modalController: ModalController,private alertController: AlertController) {}
  
  form: FormGroup;
  ionViewWillEnter() {
    this. ngOnInit();
    this.getroom();
  
}
  ngOnInit() {
    this.formInitializer();
    this.route.queryParams.subscribe((params)=>{
    console.log(params);
    this.data = JSON.parse(params.data);
    this.form.patchValue(this.data);
    if (this.data) {
      console.log('got hotel', this.data);
      console.log(this.data._id);
      this.id = this.data._id
      this.value = this.data.reviewsTotal;
      this.form.patchValue({name : this.data.name});
      this.form.patchValue({number : this.data.number});
      this.form.patchValue({Location : this.data.Location});
      this.form.patchValue({facility : this.data.facility});
      this.form.patchValue({city : this.data.city});
      this.form.patchValue({check: this.data.check});
     
    //   this.images =[];
    //   console.log(this.data.image.length);
    // for (var i = 0; i < this.data.image.length; i++)
    //  {
      
    //  this.images[i] = this.data.image[i];
   
    // }
      
    }
    })
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
      //    this.pic = this.rooms[0].Roomsinfo[0].image;
      //    console.log(this.pic.length);
      // this.images =[];
      // for (var i = 0; i < this.pic.length; i++)
      //  {
        
      //  this.images[i] = this.pic[i];
     
      // } 
        this.ROMMID = uppt.data[0]._id;
        

        
         }
      }, 
      err => {
        console.log('err', err);
      } 
    );
  }
 formInitializer() {
    
    this.form = this.formBuilder.group({
      name : [null, [Validators.required, Validators.minLength(2), Validators.pattern('^[a-zA-Z ]*$')]],
      city: [null, [Validators.required]],
      amount: [null, [Validators.required,Validators.pattern(/^[0-9]\d*$/)]],
      check: [null, [Validators.required]],
      number: [null, [Validators.required, Validators.minLength(11),Validators.pattern(/^[0-9]\d*$/)]],
      Location: [null, [Validators.required]],
      images:  [null, [Validators.required]],
      rooms:  [null, [Validators.required]],
      email: ['', [Validators.required, Validators.pattern('^[_A-Za-z0-9-\\+]+(\\.[_A-Za-z0-9-]+)*@[A-Za-z0-9-]+(\\.[A-Za-z0-9]+)*(\\.[A-Za-z]{2,})$'),Validators.email]],
      about : [null, [Validators.required, Validators.minLength(3), Validators.pattern('^[a-zA-Z ]*$')]],
      });
      
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
