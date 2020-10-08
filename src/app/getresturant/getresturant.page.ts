import {ActivatedRoute} from '@angular/router';
import {FormGroup, FormBuilder, Validators} from '@angular/forms';
import {AlertController,ModalController} from '@ionic/angular';
import { Component, OnInit, Input } from '@angular/core';
import { BooksService } from '../sdk/custom/books.service';
import { AuthService } from '../sdk/core/auth.service';
import * as jwt_decode from 'jwt-decode';
import { Router } from '@angular/router';
@Component({
  selector: 'app-getresturant',
  templateUrl: './getresturant.page.html',
  styleUrls: ['./getresturant.page.scss'],
})
export class GetresturantPage implements OnInit {

  loading = false;
  resturants: Resturants[];
  bookIconPath = 'assets/icon/ss.png';
  skeletonlist = [1, 2, 3, 4, 5];
  selectedBook: Resturants;
  deleteLoading: boolean;
  dataa: Event;
  
  c1 = '';  c2 = '';  c3 = '';  c4 = ''; 

n4 = 'star-outline'; n5 ;
star: number;
  k: number;
  adrom: any[];
  avg: any;
  flatt: any[];
  rte: any[];
  reviewForm: FormGroup;
  namee: any;
  active: string;
  true: any;
  loc: boolean;
  n1: string;
  n2: string;
  n3: string;
  n: string;
  c: string;
  constructor(private booksService: BooksService, private router: Router,private route: ActivatedRoute,private authService: AuthService, private formBuilder: FormBuilder,private modalController: ModalController,private alertController: AlertController) {}
  ionViewWillEnter() {
    this. ngOnInit();
}
  ngOnInit() {
    
    this.get();
    //this.rate();
     
  }
 
  async get() {
   
    this.loading = true;
    let owner;
    const ownerId =  await this.authService. getTokenFromStorage();
    try{
      const decoded = jwt_decode(ownerId );
      owner = decoded['data']._id;
    }
    catch(ex){
    }
    
    const observable = await this.booksService.getresturant(
      owner 
    );
    observable.subscribe(
      data => {
        this.resturants = data.data;
        this.loading = false;
        console.log('data', data);
         
      }, 
      err => {
        console.log('err', err);
      } 
    ); 
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
    this.router.navigate(['/addresturant'],{
        queryParams:{data:JSON.stringify(this.dataa)}
    });
  }




  async delete(resturant) {
    this.selectedBook = resturant;
    console.log(resturant);
    const alert = await this.alertController.create({
      header: 'Confirm!',
      message: `Are you sure you want to delete the book "${resturant.resturant}"`,
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
            this.deleteBook();
          }
        }
      ]
    });
    await alert.present();
  }

  async deleteBook() {
    this.deleteLoading = true;
    const observable = await this.booksService.deleteresturant(this.selectedBook._id);

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

interface Resturants {
  name: string;
  ibn: string;
  _id: string;
  reviewsTotal:string;
  image_url: string;
  author: string;
  is_deleted: boolean;
}


