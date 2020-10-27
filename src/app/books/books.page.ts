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
  dat: Event;
  value: boolean;
  rev: any[];
  // n1: string;
  // n2: string;
  // n3: string;
  constructor(private booksService: BooksService, private router: Router,private route: ActivatedRoute,private authService: AuthService, private formBuilder: FormBuilder,private modalController: ModalController,private alertController: AlertController) {}
  ionViewWillEnter() {
    this. ngOnInit();
}
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


  viewflat(event:Event)
  {
    this.dat = event;
    console.log(this.dat);
    this.router.navigate(['/flatprofile'],{
        queryParams:{data:JSON.stringify(this.dat)}
    });
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
