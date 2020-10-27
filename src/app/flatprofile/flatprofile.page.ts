import {ActivatedRoute} from '@angular/router';
import {FormGroup, FormBuilder, Validators} from '@angular/forms';
import {AlertController,ModalController} from '@ionic/angular';
import { Component, OnInit, Input } from '@angular/core';
import { BooksService } from '../sdk/custom/books.service';
import { AuthService } from '../sdk/core/auth.service';
import * as jwt_decode from 'jwt-decode';
import { Router } from '@angular/router';
@Component({
  selector: 'app-flatprofile',
  templateUrl: './flatprofile.page.html',
  styleUrls: ['./flatprofile.page.scss'],
})
export class FlatprofilePage implements OnInit {
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
  constructor(private booksService: BooksService, private router: Router,private route: ActivatedRoute,private authService: AuthService, private formBuilder: FormBuilder,private modalController: ModalController,private alertController: AlertController) {}
  
  form: FormGroup;
  ionViewWillEnter() {
    this. ngOnInit();
    this.getrentflats();
}
  ngOnInit() {
    this.formInitializer();
    this.route.queryParams.subscribe((params)=>{
    console.log(params);
    this.data = JSON.parse(params.data);
    this.form.patchValue(this.data);
    if (this.data) {
      console.log('got flat', this.data);
      console.log(this.data._id);
      this.value = this.data.reviewsTotal;
      this.form.patchValue({name : this.data.name});
      this.form.patchValue({city : this.data.city});
      this.form.patchValue({number : this.data.number});
      this.form.patchValue({Location : this.data.Location});
      this.form.patchValue({check: this.data.check});
      this.form.patchValue({about: this.data.about});
      this.form.patchValue({rooms: this.data.rooms});
      this.form.patchValue({email: this.data.email});
      this.images =[];
      console.log(this.data.image.length);
    for (var i = 0; i < this.data.image.length; i++)
     {
      
     this.images[i] = this.data.image[i];
   
    }
      
    }
    })
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






  async getrentflats() {
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
    const observable = await this.booksService.getrentflats(
      owner1
    );
    observable.subscribe(
      data => {
        this.rent = data.data;
        this.loading = false;
        console.log(this.rent);
        if( this.rent.length > 0)
        {
         
      
        this.showdate = this.rent[0].date;
        console.log(this.showdate);
        
        }
  
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






  async delete(data) {
  
    console.log(data._id);
    const alert = await this.alertController.create({
      header: 'Confirm!',
      message: `Are you sure you want to delete the flat`,
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
    const observable = await this.booksService.deleteflattt(data._id);

    observable.subscribe(
      data => {
        console.log('got response from server', data);
        this.deleteLoading = false;
        this.getrentflats();
      },
      error => {
        this.deleteLoading = false;
        console.log('error', error);
      }
    );
  }
}

