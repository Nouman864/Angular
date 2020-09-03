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
  selectedBook: Hotels;
  deleteLoading: boolean;
  dataa: Event;
  constructor(private booksService: BooksService, private router: Router,private route: ActivatedRoute,private authService: AuthService, private formBuilder: FormBuilder,private modalController: ModalController,private alertController: AlertController) {}

  ngOnInit() {
    this.get();
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
  
  openEditPopup(event:Event) {
  
    this.dataa = event;
    console.log(this.dataa);
    this.router.navigate(['/addhotel'],{
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

interface Hotels {
  _id: string;
  image_url: string;
 name : string,
  city: string,
  number: string,
 Location : string
}

