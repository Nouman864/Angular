import {async} from '@angular/core/testing/testing';
import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { FormGroup } from '@angular/forms';
import { UserService } from '../sdk/custom/user.service';
import { AuthService } from '../sdk/core/auth.service';
import { AlertController } from '@ionic/angular';
import * as jwt_decode from 'jwt-decode';
import { BooksService } from '../sdk/custom/books.service';
import { DataService } from '../sdk/custom/data.services';
@Component({
  selector: 'app-showtable',
  templateUrl: './showtable.page.html',
  styleUrls: ['./showtable.page.scss'],
})
export class ShowtablePage implements OnInit {
  data: any;
  loading: boolean;
  resturants: any;
  brek: any;
  rte: any;
  dnner: any;
  launh: any;
  dataa: Event;
  id: any;
  menus: any;
  showtable: any;
  owner: any;
  tbl: any;
  tb: any;
  dd: any;
  constructor(private userService:UserService,private dataService:DataService,private booksService :BooksService,private alertCtrl: AlertController,private formBuilder: FormBuilder,private router: Router,private route: ActivatedRoute, private authService: AuthService) { }
  ionViewWillEnter() {
    this. ngOnInit();
}
  async ngOnInit() {

    this.data;
    await this.dataService.gettableid().then((val)=>
    {
     this.data = val;
    });

         this.id = this.data.id.restid;
          this.checktable();
          this.gettable();
            
  }
  async checktable() {
    this.loading = true;
    let owner1 = this.id;
    const ownerId =  await this.authService. getTokenFromStorage();
    console.log(ownerId);
    try{
      const decoded = jwt_decode(ownerId );
     let owner = decoded['data']._id;
    }
    catch(ex){
    }
    console.log(owner1);
    let obj = {};

    obj['idd'] = owner1;
    const observable = await this.booksService.checktable(
      obj
    );
    observable.subscribe(
      data => {
    
        this.loading = false;
    
        this. dd = data;
        console.log(data);
            
      }, 
      err => {
        console.log('err', err);
      } 
    );
  }




  
  async gettable() {
    this.loading = true;
    let owner1 = this.id;
    const ownerId =  await this.authService. getTokenFromStorage();
    console.log(ownerId);
    try{
      const decoded = jwt_decode(ownerId );
     this.owner = decoded['data']._id;
    }
    catch(ex){
    }
    console.log(owner1);
    const observable = await this.booksService.gettable(
      owner1
    );
    observable.subscribe(
      data => {
        this.menus = data.data;
        this.loading = false;
        console.log( data);
        if(data.data.length > 0)
        {
        this.showtable = data.data[0].Ta;
        console.log(this.showtable);
        }
  
      }, 
      err => {
        console.log('err', err);
      } 
    );
  }
  
  menu(data,i)
  {

    console.log(data.tabel);
     console.log(this.dd.message);
          for(let j = 0; j<this.dd.message.length; j++)
           {
            if(this.dd.message[j].tableno == data.tabel)
            {
              window.alert('sorry, already reserved');
              return ;
            }    
           }
     
    const ob = {};
    ob['rest'] = this.id;
    ob['id'] = this.owner;
    ob['tabelno'] = data.tabel;
    ob['type'] = data.type;
    ob['capacity'] = data.capacity;  
    console.log(this.data);
    this.dataService.savereserveid(ob);
    this.router.navigateByUrl('/booktable');
  }
  
}
