import { Component, OnInit, Input } from '@angular/core';
import { Validators, FormGroup, FormBuilder } from '@angular/forms';
import { BooksService } from '../sdk/custom/books.service';
import { Platform, ToastController, ModalController, PopoverController } from '@ionic/angular';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthService } from '../sdk/core/auth.service';
import { RatingComponent } from './rating/rating.component';
import * as jwt_decode from 'jwt-decode';
import { DatePipe } from '@angular/common';
import { DataService } from '../sdk/custom/data.services';

@Component({
  selector: 'app-viewproperty',
  templateUrl: './viewproperty.page.html',
  styleUrls: ['./viewproperty.page.scss'],
})
export class ViewpropertyPage implements OnInit {
  rtid: Event;
  irt: any;
  nam: any;
  ownerid: any;
  amount: any;
  rm: Event;
  c1 = '';  c2 = '';  c3 = '';  c4 = ''; c5 = ''; 

  n1 = 'star-outline';n2 = 'star-outline';n3 = 'star-outline';n4 = 'star-outline'; n5 = 'star-outline' ; n6;n7;
star: number;
  value: any;
  faci: any;
  owner: any;
  name: any;
  email: any;
  date: Date;
  constructor(private formBuilder: FormBuilder,private router: Router,private route: ActivatedRoute,private authService: AuthService,private modalCtrl: ModalController,
    private toastController: ToastController,private popoverController: PopoverController,
    private dataService:DataService,
    private datepipe: DatePipe,
    private booksService: BooksService,private platform: Platform) 
    {

    }
      


  form: FormGroup;
  data:any;
  loading = false;
  images:any;
  @Input() flat;
  async ngOnInit() {
    this.formInitializer();
    this.data;
    await this.dataService.getflat().then((val)=>
    {
     this.data = val;
    });
    if (this.data) {
      console.log('got flat', this.data);
      this.form.patchValue(this.data);

      this.amount = this.data.amount;
      this.name = this.data.name;
      this.email = this.data.email;
      this.owner = this.data.owner;

    }
    
       this.irt = this.data._id;
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
     this.c1 = ''; this.c2 = ''; this.c3 = ''; 
     this.c4 = ''; 
     this.n1 = 'star'; this.n2 = 'star'; 
   }
   click3rd(item: any) {
     this.star = item;
     console.log('this.stars', this.star);
     
     this.c1 = '';    this.c2 = '';
     this.c3 = ''; 
     this.n1 = 'star'; this.n2 = 'star'; this.n3 = 'star';
        
     
    
     }
     click4th(item: any) {
         this.star = item;
       console.log('this.stars', this.star);
       this.c1 = '';    this.c2 = '';
       this.c3 = '';    this.c4 = '';
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

  async rent() {
       let ownerr
     const ownerId =  await this.authService. getTokenFromStorage();
  
     try{
       const decoded = jwt_decode(ownerId );
         ownerr = decoded['data']._id;
     }
     catch(ex){
     }
     if(ownerr == '')
    {
      window.alert('Login first');
      return 0;
    }
     const obj ={};
     this. date=new Date();
    let latest_date =this. datepipe. transform(this.date, 'yyyy-MM-dd');
     obj['owner'] = this.irt;
     obj['name'] = this.name;
     obj['date'] = latest_date;
     obj['clientid'] = ownerr;
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
         ob['ownerid'] = this.owner;
         ob['amount'] = this.amount;
         ob['email'] = this.email;
       this.dataService.rentflat(ob);
       this.router.navigateByUrl('/rentservice');
         this.Review(this.data);
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
