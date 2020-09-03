import {AuthService} from '../sdk/core/auth.service';
import {Input, ElementRef, ViewChild} from '@angular/core/';
import {ToastController, ModalController, Platform} from '@ionic/angular';
import {FormBuilder} from '@angular/forms/';
import {Router, ActivatedRoute} from '@angular/router/';
import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators } from '@angular/forms';
import { BooksService } from '../sdk/custom/books.service';
import * as jwt_decode from 'jwt-decode';
import { __param } from 'tslib';
import { File } from '@ionic-native/file/ngx';
import { toBase64String } from '@angular/compiler/src/output/source_map';
import { HttpClient } from '@angular/common/http';
import { UserService } from '../sdk/custom/user.service';
import { async } from 'q';
@Component({
  selector: 'app-addmenu',
  templateUrl: './addmenu.page.html',
  styleUrls: ['./addmenu.page.scss'],
})
export class AddmenuPage implements OnInit {

  service: any;
  totl: any;
  breakfast =[];
  launch =[];
  dinner =[];
  time = [];
  tabll = [];
  tab =[];
  menutype: any;
  id: any;
  loading: boolean;
  tableno: any;
  
  constructor(private formBuilder: FormBuilder,private router: Router,private route: ActivatedRoute,private authService: AuthService,private modalCtrl: ModalController,
    private booksService: BooksService, private file: File,private platform: Platform,private http: HttpClient,
    private userService:UserService) 
     {
}

form: FormGroup;

ngOnInit() {
this.formInitializer();
this.route.queryParams.subscribe((params)=>{
  console.log(params);
  this.id = JSON.parse(params.data);
    console.log(this.id);
  
  });
}

formInitializer() {
this.form = this.formBuilder.group({
  dish : [null, [Validators.required]],
  price: [null, [Validators.required]]
});
}

add()
{
  
  if(this.menutype ==  "BreakFast")
  {
   let item = this.form.value;
   this.breakfast.push(item);
   console.log(this.breakfast);
 }
 if(this.menutype ==  "Launch")
  {
let item = this.form.value;
   this.launch.push(item);
console.log(this.launch);
 }
 if(this.menutype ==  "Dinner")
  {
let item = this.form.value;
   this.dinner.push(item);
console.log(this.dinner);
 }


}


///////////////////////// TABLES /////////////////////////

table()
{
     let tabel = this.tableno;
     this.tabll.push({
       tableno:tabel
      });
     console.log(this.tabll);
}




async addNew() {
 

  this.tab.push({
    Table:this.tabll
  });
  console.log(this.tab);
  this.time.push({
      breakfast:this.breakfast,
      launch:this.launch,
      dinner:this.dinner
    });

    console.log(this.time);
  let owner;
   const ownerId =  await this.authService. getTokenFromStorage();
   const decoded = jwt_decode(ownerId );
   try{
     const decoded = jwt_decode(ownerId );
     owner = decoded['data']._id;
   }
   catch(ex){
   }
   
 let obj = {};
   obj['resturantid'] = this.id;
   obj['AvailableTime'] = this.time;
   obj['Ta'] = this.tab;
   const observable = await this.booksService.addmenu(
     obj
   );
   observable.subscribe(
     async data => {
       console.log('got response from server', data);
       console.log(data);
       this.loading = false;
       this.form.reset();
       //optional

     },
     error => {
       this.loading = false;
       console.log('error', error);
     }
   );
 }


}