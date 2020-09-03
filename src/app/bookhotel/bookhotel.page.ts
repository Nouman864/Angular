import {create} from '@angular/language-service';

import { Component, OnInit } from '@angular/core';
import { Validators, FormGroup, FormBuilder } from '@angular/forms';
import { UserService } from '../sdk/custom/user.service';
import { AlertController } from '@ionic/angular';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthService } from '../sdk/core/auth.service';
import * as jwt_decode from 'jwt-decode';
import { BooksService } from '../sdk/custom/books.service';
@Component({
  selector: 'app-bookhotel',
  templateUrl: './bookhotel.page.html',
  styleUrls: ['./bookhotel.page.scss'],
})
export class BookhotelPage implements OnInit {
  loading: boolean;
  data: any;
  room:any;
  toastController: any;
  cateogory: any;
  Locat:any;

  constructor(private userService:UserService,private booksService: BooksService,private alertCtrl: AlertController,private formBuilder: FormBuilder,private router: Router,private route: ActivatedRoute, private authService: AuthService)
   {
      
  }
  
  form: FormGroup;

  ngOnInit() {
    this.formInitializer();
    this.route.queryParams.subscribe((params)=>{
      console.log(params);
      this.data = JSON.parse(params.data);
      if (this.data) {
        //this.data.roomno;
        console.log(this.data.roomno);
        
  
      }
      })
  }
  formInitializer() {
    this.form = this.formBuilder.group({

      checkin: [null, [Validators.required]],
      checkout: [null, [Validators.required]],
    });
  }
  
  // Rooms()
  // {
  //   const ob =  this.form.value;
  //   const check =   ob.checkin;
  //   const array =[];
  //   console.log(this.data.roomno);
  //   console.log(this.room);
  //   for (var i = 0; i < this.room; i++)
  //   {
  //     array.push({
  //       checkin: check,
  //       roomno: this.data.roomno[i]
  //    })
  //   }
  //    console.log(array);
     
  //    //this.form.patchValue({Rooms: array});
    
    
   
  // }
 
 
  // async addNew() {
  //   const ob =  this.form.value;
  //   const check =   ob.checkin;
  //   const array =[];
  //   console.log(this.data.roomno);
  //   console.log(this.room);
  //   for (var i = 0; i < this.room ; i++)
  //   {
  //     array.push({
  //       checkin: check,
  //       roomno: this.data.roomno[i]
  //    })
  //   }
  //    const obj =  this.form.value;
  //    obj['Rooms'] = array;
  //    const observable = await this.booksService.BookRoom(
  //      obj
  //    );
  //    observable.subscribe(
  //      async data => {
  //        console.log('got response from server', data);
  //        this.loading = false;
  //        this.form.reset();
  //        //optional
 
  //      },
  //      error => {
  //        this.loading = false;
  //        console.log('error', error);
  //      }
  //    );
  //  }
  
 
}
