import {ActivatedRoute} from '@angular/router';
import {FormGroup, FormBuilder, Validators} from '@angular/forms';
import {AlertController,ModalController} from '@ionic/angular';
import { Component, OnInit, Input } from '@angular/core';
import { BooksService } from '../sdk/custom/books.service';
import { AuthService } from '../sdk/core/auth.service';
import * as jwt_decode from 'jwt-decode';
import { Router } from '@angular/router';
@Component({
  selector: 'app-gethotel',
  templateUrl: './gethotel.page.html',
  styleUrls: ['./gethotel.page.scss'],
})
export class GethotelPage implements OnInit {
  loading = false;
 @Input() hotel : Hotels;
  hotels: Hotels[] = [];
  bookIconPath = 'assets/icon/ss.png';
  skeletonlist = [1, 2, 3, 4, 5];
  selectedreshotel: Hotels;
  deleteLoading: boolean;
  booking = false;
  dataa: Event;
  c1 = '';  c2 = '';  c3 = '';  c4 = ''; c5 = ''; c6 = '';

  n1 = 'star-outline';n2 = 'star-outline';n3 = 'star-outline';n4 = 'star-outline';  n5 = 'star-half' ; n6;n7;
star: number;
  rooms: any;
  list: any;
  listt: any[];
  constructor(private booksService: BooksService, private router: Router,private route: ActivatedRoute,private authService: AuthService, private formBuilder: FormBuilder,private modalController: ModalController,private alertController: AlertController) {}
  ionViewWillEnter() {
    this. ngOnInit();
}
  ngOnInit() {
    this.get();
    
  }
  async bookinglist() {
    let owner1;
    const ownerId =  await this.authService. getTokenFromStorage();
    console.log(ownerId);
    try{
      const decoded = jwt_decode(ownerId );
      owner1 = decoded['data']._id;
    }
    catch(ex){
    }
    
    const observable = await this.booksService.getbookinglist(
      owner1 
    );
    observable.subscribe(
      data => {
        this.list = data.data;
        this.loading = false;
        console.log('data', data);
          let book =  data.data;
          console.log(book);
          this.listt = [];
          for(let j = 0; j<book.length; j++)
          {
               this.listt.push({
                 Rooms:book[0].Rooms[0],
               checkin: book[0].checkin,
               checkout:book[0].checkout
                
               });
          }
          console.log(this.listt);
      }, 
      err => {
        console.log('err', err);
      } 
    );
  }
  async get() {
    this.loading = true;
    let owner1;
    const ownerId =  await this.authService. getTokenFromStorage();
    console.log(ownerId);
    try{
      const decoded = jwt_decode(ownerId );
      owner1 = decoded['data']._id;
    }
    catch(ex){
    }
    
    const observable = await this.booksService.gethotel(
      owner1 
    );
    observable.subscribe(
      data => {
        this.hotels = data.data;
        this.loading = false;
        console.log('data', data);
    
      }, 
      err => {
        console.log('err', err);
      } 
    );
  }

  ////////////////////////GET ROOM ///////////////////////
  

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

  
  openEditPopup(event:Event) {
  
    this.dataa = event;
    console.log(this.dataa);
    this.router.navigate(['/addhotel'],{
        queryParams:{data:JSON.stringify(this.dataa)}
    });
  }

  openroom(event:Event) {
  
    this.dataa = event;
    console.log(this.dataa);
    this.router.navigate(['/addroom'],{
        queryParams:{data:JSON.stringify(this.dataa)}
    });
  }


  async delete(hotel) {
    this.selectedreshotel = hotel;
    console.log(hotel);
    const alert = await this.alertController.create({
      header: 'Confirm!',
      message: `Are you sure you want to delete the Hotel "${hotel.name}"`,
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
            this.deleteres();
          }
        }
      ]
    });
    await alert.present();
  }

  async deleteres() {
    this.deleteLoading = true;
    const observable = await this.booksService.deletehotel(this.selectedreshotel._id);

    observable.subscribe(
      data => {
        console.log('got response from server', data);
        this.deleteLoading = false;
        this.get();
      },
      error => {
        this.deleteLoading = false;
        console.log('error', error);
      }
    );
  }
  

}
  
  

  

  


// Intefacing is Optional

interface Hotels {
  _id: string;
  image_url: string;
 name : string,
  city: string,
  number: string,
 Location : string
}

