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
  constructor(private booksService: BooksService, private router: Router,private route: ActivatedRoute,private authService: AuthService, private formBuilder: FormBuilder,private modalController: ModalController,private alertController: AlertController) {}

  ngOnInit() {
    
    this.get();
    //this.rate();
     
  }
 
  async get() {
    this.click3rd(3);
    this.clickForth(3.5);
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
           
      }, 
      err => {
        console.log('err', err);
      } 
    ); 
  } 

  // async rate() {

  //   this.loading = true;
  //   let owner;
  //   const ownerId =  await this.authService. getTokenFromStorage();
  //   try{
  //     const decoded = jwt_decode(ownerId );
  //     owner = decoded['data']._id;
  //   }
  //   catch(ex){
  //   }

  //   const obj =  this.reviewForm.value;
    

  //     console.log(this.flatt);
  // obj['id'] = this.flatt;
  // obj['owner'] = owner;
  //   const observable = await this.booksService.getrating(
  //     obj 
  //   );  
  //   observable.subscribe(
  //     data => {
  //       this.loading = false;
  //       //   for (var i = 0; i < this.flatt.length; i++)
  //       // {     
  //       //   let id = this.flatt[i];
  //       //   for (var j = 0; j < data.length; j++)
  //       //   {     
  //       //         if(id === data.result[j].userid)
  //       //         {  
                       
  //       //               this.rte.push(data.result[j].rating)
  //       //         }
            
  //       //   }
          
  //       // }
  //       // console.log(this.rte);
  //     // var j = 0;
  //     //   this.adrom =[];
  //     //   for (var i = 0; i < data.result.length; i++)
  //     //   {     
  //     //     j = j + 1;
  //     //     this.adrom.push(data.result[i].rating)

  //     //   }
  //     //   console.log(this.adrom);
  //     //   var sumNumber = this.adrom.reduce((acc, cur) => acc + Number(cur), 0)
  //     //   console.log(sumNumber);
  //     //   console.log("no of orating:" , sumNumber);
  //     //   console.log("no of user:", j);
  //     //  let avg = sumNumber/j;
  //     //   console.log(avg);
  //     //   if(avg>=3)
  //     //   {
  //     //     this.click3rd(avg);
  //     //   }
  //     //   if(avg>=2)
  //     //   {
  //     //     this.click2nd(avg);
  //     //   }
  //     }, 
  //     err => {
  //       console.log('err', err);
  //     } 
  //   ); 
  // }
  clickFirst(item: any) {
    this.star = item;
    console.log('this.stars', this.star);
 this.c1 = 'primary'; this.c2 = 'primary';
 this.n1 = 'star'; this.n2 = 'star-half';
 }
 click2nd(item: any) {
  this.star = item;
  console.log('this.stars', this.star);
   this.c1 = 'primary';    this.c2 = 'primary'; this.c3 = 'primary';
     this.n1 = 'star'; this.n2 = 'star'; this.n3 = 'star-half';
   }
   click3rd(item: any) {
     this.star = item;
     console.log('this.stars', this.star);
     
          this.c1 = 'primary';this.c2 = 'primary';this.c3 = 'primary';
          //this.c4 = 'primary';
         this.n1 = 'star';  this.n2 = 'star';
         this.n3 = 'star';//this.n4 = 'star-half';
        
     
    
     }
     clickForth(item: any) {
         this.star = item;
       console.log('this.stars', this.star);
       this.c1 = 'primary';    this.c2 = 'primary';
       this.c3 = 'primary';    this.c4 = 'primary';
       this.n1 = 'star'; this.n2 = 'star'; this.n3 = 'star'; this.n4 = 'star-half';

     
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
