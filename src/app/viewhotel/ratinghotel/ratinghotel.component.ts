import { Component, OnInit } from '@angular/core';
import {PopoverController} from '@ionic/angular';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import { AuthService } from 'src/app/sdk/core/auth.service';
import * as jwt_decode from 'jwt-decode';
import { BooksService } from 'src/app/sdk/custom/books.service';
@Component({
  selector: 'app-ratinghotel',
  templateUrl: './ratinghotel.component.html',
  styleUrls: ['./ratinghotel.component.scss'],
})
export class RatinghotelComponent implements OnInit {

  service: any;
  event: any;
  form: any;
  loading: boolean;
  title: any;
 
  
  constructor(private popoverController: PopoverController,private authService: AuthService,private booksService: BooksService,
    private formBuilder: FormBuilder) {
}
 c1 = '';  c2 = '';  c3 = '';  c4 = ''; 
n1 = 'star-outline'; n2 = 'star-outline'; n3 = 'star-outline';
n4 = 'star-outline';
star: number;
reviewFormm: FormGroup;
d: Date = new Date();
ngOnInit() {
  console.log(this.event);
this.formInitializer();
}

formInitializer() {
this.reviewFormm = this.formBuilder.group({
stars: [this.star, [Validators.required]],
title: [null, [Validators.required]]
});
}
clickFirst(item: any) {
   this.star = item;
   console.log('this.stars', this.star);
this.c1 = 'primary';
this.n1 = 'star';
}
click2nd(item: any) {
 this.star = item;
 console.log('this.stars', this.star);
  this.c1 = 'primary';    this.c2 = 'primary';
    this.n1 = 'star'; this.n2 = 'star';
  }
  click3rd(item: any) {
    this.star = item;
    console.log('this.stars', this.star);
    this.c1 = 'primary';    this.c2 = 'primary';
    this.c3 = 'primary';
    this.n1 = 'star'; this.n2 = 'star'; this.n3 = 'star';
    }
    clickForth(item: any) {
        this.star = item;
      console.log('this.stars', this.star);
      this.c1 = 'primary';    this.c2 = 'primary';
      this.c3 = 'primary';    this.c4 = 'primary';
      this.n1 = 'star'; this.n2 = 'star'; this.n3 = 'star'; this.n4 = 'star';
      }



     
     
    
       async addReview()  {
        //let owner = this.event.owner;
        let hotelid = this.event;
        this.loading = true;
    let user;
    const ownerId =  await this.authService. getTokenFromStorage();
    try{
      const decoded = jwt_decode(ownerId );
      user = decoded['data']._id;
    }
    catch(ex){
    }
         
         const obj = {};
         console.log(this.d);
         obj['hotelid'] = hotelid;
         obj['rating'] = this.star;
         const observable = await this.booksService.hotelreview(
           obj
         );
         observable.subscribe(
           async data => {
             console.log('got response from server', data);
             this.loading = false;
             this.reviewFormm.reset();
           },
           error => {
             this.loading = false;
             console.log('error', error);
           }
         );
       }
}
