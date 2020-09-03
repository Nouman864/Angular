import { Component, OnInit } from '@angular/core';
import {PopoverController} from '@ionic/angular';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import { AuthService } from 'src/app/sdk/core/auth.service';
import * as jwt_decode from 'jwt-decode';
import { BooksService } from 'src/app/sdk/custom/books.service';
@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.scss'],
})
export class RatingComponent implements OnInit {
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
reviewForm: FormGroup;
d: Date = new Date();
ngOnInit() {
  console.log(this.event);
this.formInitializer();
}

formInitializer() {
this.reviewForm = this.formBuilder.group({
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
        let owner = this.event.owner;
        let flatid = this.event._id;
        console.log(owner);
        console.log(flatid);
        this.loading = true;
    let user;
    const ownerId =  await this.authService. getTokenFromStorage();
    try{
      const decoded = jwt_decode(ownerId );
      user = decoded['data']._id;
    }
    catch(ex){
    }
         
         const obj =  this.reviewForm.value;
         console.log(this.d);
         obj['propertyid'] = owner;
         obj['userid'] = flatid;
         obj['rating'] = this.star;
         obj['date'] = this.d;
         const observable = await this.booksService.adreview(
           obj
         );
         observable.subscribe(
           async data => {
             console.log('got response from server', data);
             this.loading = false;
             this.reviewForm.reset();
           },
           error => {
             this.loading = false;
             console.log('error', error);
           }
         );
       }
}