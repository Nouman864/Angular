import {ActivatedRoute} from '@angular/router';
import {FormGroup, FormBuilder, Validators} from '@angular/forms';
import {AlertController,ModalController, PopoverController} from '@ionic/angular';
import { Component, OnInit, Input } from '@angular/core';
import { BooksService } from '../sdk/custom/books.service';
import { AuthService } from '../sdk/core/auth.service';
import * as jwt_decode from 'jwt-decode';
import { Router } from '@angular/router';
import { DataService } from '../sdk/custom/data.services';
import { HallratingComponent } from './hallrating/hallrating.component';
@Component({
  selector: 'app-viewhall',
  templateUrl: './viewhall.page.html',
  styleUrls: ['./viewhall.page.scss'],
})
export class ViewhallPage implements OnInit {
  c1 = '';  c2 = '';  c3 = '';  c4 = ''; c5 = ''; c6 = '';

  n1 = 'star-outline';n2 = 'star-outline';n3 = 'star-outline';n4 = 'star-outline'; n5 = 'star-outline'; n6;n7;
star: number;
  data: any;
  imagess: any[];
  halls: any;
  loading: boolean;
  menucharge1: any;
  menucharge2: any;
  men1: any;
  men2: any;
  email: any;
  owner: any;
  name: any;
  halid: any;
  halname: any;
  value: any;
 

constructor(private booksService: BooksService, private popoverController: PopoverController,    private dataService:DataService,private router: Router,private route: ActivatedRoute,private authService: AuthService, private formBuilder: FormBuilder,private modalController: ModalController,private alertController: AlertController) {}
  
form: FormGroup;
ionViewWillEnter() {
  this. ngOnInit();
}

  async ngOnInit() {
    this.formInitializer();
    this.data;
    await this.dataService.gethall().then((val)=>
    {
     this.data = val;
    });
    if (this.data) {
      console.log('got hall', this.data);
      console.log(this.data._id);
        this.halid = this.data._id
      // this.value = this.data.reviewsTotal;
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
       this.email = this.data.email;
       this.name =  this.data.name;
      this.imagess =[];
      
    for (var i = 0; i < this.data.images.length; i++)
     {
      
     this.imagess[i] = this.data.images[i];
   
    }
      
    }
    
  
    this.get();
    this.booked();
    this.gt();
    // this.checktable();
 
  }
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
     obj['sd'] = this.halid;
    const observable = await this.booksService.gethallreview(
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


  async get() {
    this.loading = true;
   let halid = this.data._id;
  this.owner;
    const ownerId =  await this.authService. getTokenFromStorage();
    try{
      const decoded = jwt_decode(ownerId );
     this.owner = decoded['data']._id;
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
        this.Review(halid);
    
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


///////////////////////GET Booked halls.\//////////////////////////////////////////
async booked() {
  this.loading = true;
 let halid = this.data._id;
this.owner;
  const ownerId =  await this.authService. getTokenFromStorage();
  try{
    const decoded = jwt_decode(ownerId );
   this.owner = decoded['data']._id;
  }
  catch(ex){
  }
  
  const observable = await this.booksService.getbookedhall(
    halid
  );
  observable.subscribe(
    data => {
      this.halls = data.data;
      this.loading = false;
    console.log(this.halls);
    if(this.halls)
    {
   this.halname = this.halls[0].Hallname;
    }
    
  
    }, 
    err => {
      console.log('err', err);
    } 
  ); 
}







  booking()
  {


     if(this.name == this.halname)
     {
      window.alert('Alread Booked,');
      return 0;
     }
    let ob = {};
      ob['menu1'] = this. menucharge1;
      ob['menu2'] =   this.menucharge2;
   ob['owner'] = this.owner;
   ob['email'] = this.email;
   ob['hallname'] = this.name;
   ob['halid'] = this.halid;
                 
               
   this.dataService.savehalmenu(ob);
    this.router.navigateByUrl('/hallbooking');
  }

  async Review(event:Event)
  {
       const review = await this.popoverController.create({
       component: HallratingComponent,
       componentProps: { event }
       });
       review.onDidDismiss().then(data => {
      
        
      });
      await review.present();
     
  }
}
