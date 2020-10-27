import { Component, OnInit, Input } from '@angular/core';
import { Validators, FormGroup, FormBuilder } from '@angular/forms';
import { BooksService } from '../sdk/custom/books.service';
import { Platform, ToastController, ModalController, PopoverController } from '@ionic/angular';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthService } from '../sdk/core/auth.service';
import { RatinghotelComponent } from './ratinghotel/ratinghotel.component';
import * as jwt_decode from 'jwt-decode';
import { DataService } from '../sdk/custom/data.services';
@Component({
  selector: 'app-viewhotel',
  templateUrl: './viewhotel.page.html',
  styleUrls: ['./viewhotel.page.scss'],
})
export class ViewhotelPage implements OnInit {
  hotelowner: any;
  roomid: any;
  id: any;
  hotlid: any;

  c1 = '';  c2 = '';  c3 = '';  c4 = ''; c5 = ''; c6 = '';

  n1 = 'star-outline';n2 = 'star-outline';n3 = 'star-outline';n4 = 'star-outline'; n5 = 'star-outline' ; n6;n7;
star: number;
  ht: any;
  value: any;
  owner: any;
  email: any;
  constructor(private formBuilder: FormBuilder,private router: Router,private route: ActivatedRoute,private authService: AuthService,private modalCtrl: ModalController,
    private toastController: ToastController,private popoverController: PopoverController,private dataService:DataService,
    private booksService: BooksService,private platform: Platform) 
    {

    }
      

    dataa:any;
  form: FormGroup;
  data:any;
  //rooms : any;
  rooms: Rooms[];
  loading = false;
  images:any;
  ionViewWillEnter() {
    this.ngOnInit();
}
  async ngOnInit() {
    this.formInitializer();
    this.data;
    await this.dataService.gethotel().then((val)=>
    {
     this.data = val;
    });
      console.log(this.data);
    if (this.data) {
      console.log('got hotel', this.data);
      this.hotlid = this.data._id;
      this.ht = this.data._id;
      this.hotelowner = this.data.owner;
      this.form.patchValue(this.data);
      this.form.patchValue(this.data.email);
      this.email = this.data.email;
    }
  
   this.gt();
   console.log(this.data.images.length);
   this.images =[];
   for (var i = 0; i < this.data.images.length; i++)
    {
     
    this.images[i] = this.data.images[i];
  
   }
    this.get();
  }

  
  formInitializer() {
    
    this.form = this.formBuilder.group({
      _id: [null],
      name : [null, [Validators.required, Validators.pattern('^[a-zA-Z ]*$')]],
      city: [null, [Validators.required]],
     number: [null, [Validators.required]],
     email: [null, [Validators.required,Validators.email]],
      Location: [null, [Validators.required]],
      facility: [null, [Validators.required,  Validators.pattern('^[a-zA-Z ]*$')]],
      images: [null, [Validators.required]],
      });
  }

  ///////////// GET 
  async gt() {
    this.loading = true;
let ownerr;
    const ownerId =  await this.authService. getTokenFromStorage();
    try{
      const decoded = jwt_decode(ownerId );
      ownerr = decoded['data']._id;
    }
    catch(ex){
    }
     const obj = {};
     obj['sd'] = this.hotlid;
    const observable = await this.booksService.gethotelreview(
      obj
    );
    observable.subscribe(
      data => {
        this.loading = false;
        console.log('data', data);
        this. value = data['data'];
        console.log(this.value);
         
      }, 
      err => {
        console.log('err', err);
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

///////////////////// GET ROOM/////////////////////
  
  async get() {
    this.loading = true;
    const owner = this.hotlid ;
    
    const observable = await this.booksService.getroom(
      owner 
    );
    observable.subscribe(
      data => {
        this.rooms = data.data;
        this.loading = false;
        console.log('got rooms', data);
         console.log(this.rooms);
      }, 
      err => {
        console.log('err', err);
      } 
    );
  }

  booking(event:Event) {
   let ob = {};
   ob['room'] = this.rooms;
   ob['owner'] = this.hotelowner;
   ob['email'] = this.email;
   this.dataService.saveroom(ob);
    this.router.navigateByUrl('/bookroom');
}

async Review(event:Event)
  {
       const review = await this.popoverController.create({
       component: RatinghotelComponent,
       componentProps: { event }
       });
       review.onDidDismiss().then(data => {
      
        
      });
      await review.present();
     
  }



}



interface Rooms {
  _id: string;
   Rooms: string; 
}