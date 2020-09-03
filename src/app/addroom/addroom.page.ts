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
  selector: 'app-addroom',
  templateUrl: './addroom.page.html',
  styleUrls: ['./addroom.page.scss'],
})
export class AddroomPage implements OnInit {
  roomtype: any;
  roomcategory: any;
  data: any;
  obj:any;
  loading: boolean
 
  constructor(private userService:UserService,private booksService: BooksService,private alertCtrl: AlertController,private router: Router,private route: ActivatedRoute, private authService: AuthService)
   {
      
  }
  ngOnInit() {
  }
  


    


    async addNew() {
      let owner;
    const ownerId =  await this.authService. getTokenFromStorage();
    try{
      const decoded = jwt_decode(ownerId );
      owner = decoded['data']._id;
    }
    catch(ex){
    }
      const room = [{Roomid: "110",},{Roomid: "111",},{Roomid: "112",},{Roomid: "113",},{Roomid: "114",},{Roomid: "115",},{Roomid: "116",},{Roomid: "117",},{Roomid: "118",},{Roomid: "119",},{Roomid: "120",}]
    const array = [];
     console.log(this.roomtype);
     console.log(this.roomcategory);
      for (var i = 0; i < this.roomtype; i++)
      {
        array.push({
          roomno: room[i],
          Location: this.roomcategory
          
       })
      }
      console.log(array);
         let obj = {};
       obj['Rooms'] = array;
       obj['owner'] = owner;
      
       const observable = await this.booksService.addRoom(
         obj
       );
       observable.subscribe(
         async data => {
           console.log('got response from server', data);
           this.loading = false;
          
           //optional
   
         },
         error => {
           this.loading = false;
           console.log('error', error);
         }
       );
     }
}
