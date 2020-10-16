import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthService } from '../sdk/core/auth.service';
import { ModalController, ToastController, PopoverController, Platform } from '@ionic/angular';
import { BooksService } from '../sdk/custom/books.service';
import { RatingComponent } from '../viewproperty/rating/rating.component';
import { RatingresturantComponent } from './ratingresturant/ratingresturant.component';
import * as jwt_decode from 'jwt-decode';
import { DataService } from '../sdk/custom/data.services';

@Component({
  selector: 'app-viewresturant',
  templateUrl: './viewresturant.page.html',
  styleUrls: ['./viewresturant.page.scss'],
})
export class ViewresturantPage implements OnInit {

  rtid: Event;
  irt: any;
  Timings : [];
  dataa: Event;
  c1 = '#b8860b';  c2 = '';  c3 = '';  c4 = ''; c5 = ''; c6 = '';

  n1 = 'star-outline';n2 = 'star-outline';n3 = 'star-outline';n4 = 'star-outline'; n5 = 'star-half' ; n6;n7;
star: number;
  value: any;
  own: any;

  constructor(private formBuilder: FormBuilder,private router: Router,private route: ActivatedRoute,private authService: AuthService,private modalCtrl: ModalController,
    private toastController: ToastController,private popoverController: PopoverController,private dataService:DataService,
    private booksService: BooksService,private platform: Platform) 
    {

    }
      


  form: FormGroup;
  data:any;
  loading = false;
  images:any;
  ionViewWillEnter() {
    this.ngOnInit();
}
  async ngOnInit() {
    this.formInitializer();
    this.data;
    await this.dataService.getresturant().then((val)=>
    {
     this.data = val;
    });
    if (this.data) {
      console.log('got ', this.data);
      this.form.patchValue(this.data);
        this.own = this.data.owner;
      
    }
       this.irt = this.data._id;
       
       this.Timings = this.data['Timings'];
       console.log(this.Timings);
       console.log(this.irt);
    
    
  
    this.images =[];
    console.log(this.data.image.length);
    this.images =[];
    for (var i = 0; i < this.data.image.length; i++)
     {
      
     this.images[i] = this.data.image[i];
   
    }
    this.get();
  }

  
  formInitializer() {
    
    this.form = this.formBuilder.group({
      _id: [null],
      about:[null, [Validators.required]],
      open:[null, [Validators.required]],
      close: [null, [Validators.required]],
      name : [null, [Validators.required]],
      city: [null, [Validators.required]],
     number: [null, [Validators.required]],
      Location :  [null, [Validators.required]],
      image :  [null],
      });
  } 
  

  async get() {
    this.loading = true;
    let id;
    let ownerr
        ownerr = this.irt;
        console.log(id);
    const ownerId =  await this.authService. getTokenFromStorage();
    try{
      const decoded = jwt_decode(ownerId );
      ownerr = decoded['data']._id;
    }
    catch(ex){
    }
     const obj = {};
     obj['sd'] = this.irt;
    const observable = await this.booksService.getreview(
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


 /////////////////   GET RESTURANTS RATINGS//////////////////////////
 clickFirst(item: any) {
  this.star = item;
  console.log('this.stars', this.star);
this.c1 = '';
this.n1 = 'star'; 
}
click2nd(item: any) {
this.star = item;
console.log('this.stars', this.star);
   this.c1 = ''; this.c2 = ''; this.c3 = ''; 
   this.c4 = ''; 
   this.n1 = 'star'; this.n2 = 'star'; 
 }
 click2half(item: any) {
  this.star = item;
  console.log('this.stars', this.star);
     this.c1 = ''; this.c2 = ''; this.c3 = ''; 
     this.c4 = ''; 
     this.n1 = 'star'; this.n2 = 'star'; this.n3 = 'star-half'; 
   }
 click3rd(item: any) {
   this.star = item;
   console.log('this.stars', this.star);
   
   this.c1 = '';    this.c2 = '';
   this.c3 = '';   
   this.n1 = 'star'; this.n2 = 'star'; this.n3 = 'star'; 
      
   }
   click3half(item: any) {
    this.star = item;
    console.log('this.stars', this.star);
    this.c1 = '';    this.c2 = '';
    this.c3 = '';   this.c4 = '';
    this.n1 = 'star'; this.n2 = 'star'; this.n3 = 'star'; this.n4 = 'star-half';
       
    }
   clickForth(item: any) {
       this.star = item;
     console.log('this.stars', this.star);
     this.c1 = '';    this.c2 = '';
     this.c3 = '';    this.c4 = '';
     this.n1 = 'star'; this.n2 = 'star'; this.n3 = 'star'; this.n4 = 'star';

   
     }








 async Review(event:Event)
  {
       const review = await this.popoverController.create({
       component: RatingresturantComponent,
       componentProps: { event }
       });
       review.onDidDismiss().then(data => {
      
        
      });
      await review.present();
     
  }
  menu(event:Event)
  {
    
    const ob ={};
    ob['restid'] = this.irt;
    ob['owner']  =  this.own;
    this.dataa = event;
    console.log(this.dataa);
    this.dataService.savemenuid(ob);
    this.router.navigateByUrl('/showmenu');
  }
 
}