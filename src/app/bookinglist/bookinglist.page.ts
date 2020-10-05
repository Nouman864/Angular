import {ActivatedRoute} from '@angular/router';
import {FormGroup, FormBuilder, Validators} from '@angular/forms';
import {AlertController,ModalController} from '@ionic/angular';
import { Component, OnInit, Input } from '@angular/core';
import { BooksService } from '../sdk/custom/books.service';
import { AuthService } from '../sdk/core/auth.service';
import * as jwt_decode from 'jwt-decode';
import { Router } from '@angular/router';
@Component({
  selector: 'app-bookinglist',
  templateUrl: './bookinglist.page.html',
  styleUrls: ['./bookinglist.page.scss'],
})
export class BookinglistPage implements OnInit {

  loading = false;
  @Input() room : Rooms;
   rooms: Rooms[] = [];
   bookIconPath = 'assets/icon/ss.png';
   skeletonlist = [1, 2, 3, 4, 5];
   selectedreshotel: Rooms;
   deleteLoading: boolean;
   booking = false;
   dataa: Event;
 
  
   list: any;
   listt: any[];
   constructor(private booksService: BooksService, private router: Router,private route: ActivatedRoute,private authService: AuthService, private formBuilder: FormBuilder,private modalController: ModalController,private alertController: AlertController) {}
 
   ngOnInit() {
     this.bookinglist();
     
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
           console.log(this.list);
           this.listt = [];
      
           console.log(this.listt);
       }, 
       err => {
         console.log('err', err);
       } 
     );
   }
  
  
 
   
   
 
 
  
   async delete(room) {
    this.selectedreshotel = room;
     const alert = await this.alertController.create({
       header: 'Confirm!',
       message: `Are you sure you want to delete the room`,
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
             this.del();
           }
         }
       ]
     });
     await alert.present();
   }
   async del()
   {
     this.deleteLoading = true;
     const observable = await this.booksService.deletebooking(this.selectedreshotel._id);
 
     observable.subscribe(
       data => {
         console.log('got response from server', data);
         this.deleteLoading = false;
         this.bookinglist();
       },
       error => {
         this.deleteLoading = false;
         console.log('error', error);
       }
     );
 
   }

}
interface Rooms {
  _id: string;
  image_url: string;
 name : string,
  city: string,
  number: string,
 Location : string
}