import {ActivatedRoute} from '@angular/router';
import {FormGroup, FormBuilder, Validators} from '@angular/forms';
import {AlertController,ModalController} from '@ionic/angular';
import { Component, OnInit, Input } from '@angular/core';
import { BooksService } from '../sdk/custom/books.service';
import { AuthService } from '../sdk/core/auth.service';
import * as jwt_decode from 'jwt-decode';
import { Router } from '@angular/router';
@Component({
  selector: 'app-marraigehall',
  templateUrl: './marraigehall.page.html',
  styleUrls: ['./marraigehall.page.scss'],
})
export class MarraigehallPage implements OnInit {

  loading = false;
  halls: Marraiges[];
  bookIconPath = 'assets/icon/ss.png';
  skeletonlist = [1, 2, 3, 4, 5];
  selectedBook: Marraiges;
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
  n1: string;
  n2: string;
  n3: string;
  n: string;
  c: string;
  dat: Event;
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
    
    const observable = await this.booksService.gethall(
      owner 
    );
    observable.subscribe(
      data => {
        this.halls = data.data;
        this.loading = false;
        console.log('HALLS', this.halls);
         
      }, 
      err => {
        console.log('err', err);
      } 
    ); 
  } 

  






  openEditPopup(event:Event) {
  
    this.dataa = event;
    console.log(this.dataa);
    this.router.navigate(['/addhall'],{
        queryParams:{data:JSON.stringify(this.dataa)}
    });
  }




  async delete(marraige) {
    this.selectedBook = marraige;

    const alert = await this.alertController.create({
      header: 'Confirm!',
      message: `Are you sure you want to delete the Hall`,
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
    const observable = await this.booksService.deletemarraige(this.selectedBook._id);

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



  viewrest(event:Event)
  {
    this.dat = event;
    console.log(this.dat);
    this.router.navigate(['/marriageprofile'],{
        queryParams:{data:JSON.stringify(this.dat)}
    });
  }


}
interface Marraiges {
  name: string;
  ibn: string;
  _id: string;
  reviewsTotal:string;
  image_url: string;
  author: string;
  is_deleted: boolean;
}