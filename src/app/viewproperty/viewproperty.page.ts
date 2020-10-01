import { Component, OnInit, Input } from '@angular/core';
import { Validators, FormGroup, FormBuilder } from '@angular/forms';
import { BooksService } from '../sdk/custom/books.service';
import { Platform, ToastController, ModalController, PopoverController } from '@ionic/angular';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthService } from '../sdk/core/auth.service';
import { RatingComponent } from './rating/rating.component';
import * as jwt_decode from 'jwt-decode';

@Component({
  selector: 'app-viewproperty',
  templateUrl: './viewproperty.page.html',
  styleUrls: ['./viewproperty.page.scss'],
})
export class ViewpropertyPage implements OnInit {
  rtid: Event;
  irt: any;
  nam: any;
  d: Date = new Date();
  ownerid: any;
  amount: any;
  rm: Event;
  c1 = '#b8860b';  c2 = '';  c3 = '';  c4 = ''; c5 = ''; c6 = '';

  n1 = 'star-outline';n2 = 'star-outline';n3 = 'star-outline';n4 = 'star-outline'; n5 = 'star-half' ; n6;n7;
star: number;
  value: any;
  faci: any;
  constructor(private formBuilder: FormBuilder,private router: Router,private route: ActivatedRoute,private authService: AuthService,private modalCtrl: ModalController,
    private toastController: ToastController,private popoverController: PopoverController,
    private booksService: BooksService,private platform: Platform) 
    {

    }
      


  form: FormGroup;
  data:any;
  loading = false;
  images:any;
  @Input() flat;
  ngOnInit() {
    this.formInitializer();
    this.route.queryParams.subscribe((params)=>{
    console.log(params);
    this.data = JSON.parse(params.data);
    if (this.data) {
      console.log('got flat', this.data);
      this.form.patchValue(this.data);

      this.faci = this.data.facility;
    }
    console.log(this.faci);
       this.irt = this.data._id;
    
       //console.log(this.data);
    
    })
   console.log(this.data.image[0]);
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
      name : [null, [Validators.required]],
      amount : [null, [Validators.required]],
      city: [null, [Validators.required]],
     number: [null, [Validators.required]],
      Location :  [null, [Validators.required]],
      facility :  [null, [Validators.required]],
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
    const observable = await this.booksService.getflatreview(
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



   room(event: Event)
    {
      this.rm = event;
      console.log(this.rm);
      this.router.navigate(['/singleroom'],{
          queryParams:{data:JSON.stringify(this.rm)}
      });
    
    
   }
   clickFirst(item: any) {
    this.star = item;
    console.log('this.stars', this.star);
  this.c1 = '';
  this.n1 = 'star'; 
  }
  click2nd(item: any) {
  this.star = item;
  console.log('this.stars', this.star);
     this.c1 = ''; this.c2 = ''; 
     this.n1 = 'star'; this.n2 = 'star'; this.n3; this.n4;
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
     this.n1 = 'star'; this.n2 = 'star'; this.n3 = 'star'; this.n4 = 'star';
        
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

  async rent() {
    let owner;
     const ownerId =  await this.authService. getTokenFromStorage();
  
     try{
       const decoded = jwt_decode(ownerId );
       owner = decoded['data']._id;
     }
     catch(ex){
     }
     const obj ={};
     
     obj['owner'] = this.irt;
     obj['name'] = this.nam;
     obj['date'] = this.d;
     const observable = await this.booksService.addrent(
       obj
     );
     observable.subscribe(
       async data => {
         console.log('got response from server', data);
         this.Review(this.irt);
         if(data.message == "Rent already")
         { 
          window.alert('Alread Rented,Try Another');
             
         }
         else
         {
         const name = this.form.controls['name'].value;
         const toast = await this.toastController.create({
           message: `${name} has been added successfully.`,
           duration: 3500
         });
         toast.present();
         this.loading = false;
         const ob ={};
         ob['ownerid'] = this.ownerid;
         //ob['amount'] = this.amount;
         this.router.navigate(['/paymentprocess'],{
          queryParams:{data:JSON.stringify(ob)}
      });
         this.Review(this.irt);
         }
         //this.form.reset();
         //optional
 
       },
       error => {
         this.loading = false;
         console.log('error', error);
       }
     );
   }

 async Review(event:Event)
  {
       const review = await this.popoverController.create({
       component: RatingComponent,
       componentProps: { event }
       });
       review.onDidDismiss().then(data => {
      
        
      });
      await review.present();
     
  }


 
}
