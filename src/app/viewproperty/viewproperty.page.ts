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
      
    }
       this.irt = this.data._id;
       this.nam = this.data.name;
       this.ownerid = this.data.owner;
       this.amount = this.data.amount;
       //console.log(this.data);
    
    })
   console.log(this.data.image[0]);
    this.images =[];
    for (var i = 0; i < this.data.image.length; i++)
     {
      
     this.images[i] = this.data.image[i];
   
    }
    
  }

  
  formInitializer() {
    
    this.form = this.formBuilder.group({
      _id: [null],
      name : [null, [Validators.required]],
      amount : [null, [Validators.required]],
      city: [null, [Validators.required]],
     number: [null, [Validators.required]],
      Location :  [null, [Validators.required]],
      image :  [null],
      });
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
         ob['amount'] = this.amount;
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
