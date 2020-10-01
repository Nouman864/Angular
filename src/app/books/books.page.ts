import {ActivatedRoute} from '@angular/router';
import {FormGroup, FormBuilder, Validators} from '@angular/forms';
import {AlertController,ModalController} from '@ionic/angular';
import { Component, OnInit, Input } from '@angular/core';
import { BooksService } from '../sdk/custom/books.service';
import { AuthService } from '../sdk/core/auth.service';
import { AddservicePage } from '../addservice/addservice.page';
import * as jwt_decode from 'jwt-decode';
import { Router } from '@angular/router';

@Component({
  selector: 'app-books',
  templateUrl: './books.page.html',
  styleUrls: ['./books.page.scss']
})
export class BooksPage implements OnInit {
  loading = false;
  @Input() flat : Flats;
  flats: Flats[] = [];
  bookIconPath = 'assets/icon/ss.png';
  skeletonlist = [1, 2, 3, 4, 5];
  selectedBook: Flats;
  deleteLoading: boolean;
  dataa: Event;
  
  c1 = '';  c2 = '';  c3 = '';  c4 = ''; c5 = ''; c6 = '';

  n1 = 'star-outline';n2 = 'star-outline';n3 = 'star-outline';n4 = 'star-outline'; n5 ; n6;n7;
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
  // n1: string;
  // n2: string;
  // n3: string;
  constructor(private booksService: BooksService, private router: Router,private route: ActivatedRoute,private authService: AuthService, private formBuilder: FormBuilder,private modalController: ModalController,private alertController: AlertController) {}

  ngOnInit() {
    
    this.get();
    //this.rate();
     
  }
 
  async get() {

    // this.clickFirst(1);
    // this.click3rd(3);
    // this.clickForth(4);
    // this.click2nd(2);
    this.loading = true;
    let owner;
    const ownerId =  await this.authService. getTokenFromStorage();
    try{
      const decoded = jwt_decode(ownerId );
      owner = decoded['data']._id;
    }
    catch(ex){
    }
    
    const observable = await this.booksService.getflat(
      owner 
    );
    observable.subscribe(
      data => {
        this.flats = data.data;
        this.loading = false;
        console.log('data', data);
        console.log(this.flats);
           
      }, 
      err => {
        console.log('err', err);
      } 
    ); 
    // for(let i = 0; i< this.flats.length; i++)
    // {
    //   if(this.flats[i].reviewsTotal == '2')
    //   {
    //     this.click2nd(2);
    //   }
    // // this.clickFirst(1);
    // // this.click2nd(2);
    // // this.click3rd(3);
    // // this.clickForth(4);
    // }
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
    this.router.navigate(['/addservice'],{
        queryParams:{data:JSON.stringify(this.dataa)}
    });
  }




  async delete(flat) {
    this.selectedBook = flat;
    console.log(flat);
    const alert = await this.alertController.create({
      header: 'Confirm!',
      message: `Are you sure you want to delete the book "${flat.flat}"`,
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
    const observable = await this.booksService.deleteBook(this.selectedBook._id);

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

interface Flats {
  name: string;
  ibn: string;
  _id: string;
  reviewsTotal:string;
  image_url: string;
  author: string;
  is_deleted: boolean;
}
