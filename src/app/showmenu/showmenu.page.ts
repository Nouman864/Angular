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
  selector: 'app-showmenu',
  templateUrl: './showmenu.page.html',
  styleUrls: ['./showmenu.page.scss'],
})
export class ShowmenuPage implements OnInit {
  data: any;
  loading: boolean;
  resturants: any;
  brek: any;
  rte: any;
  dnner: any;
  launh: any;
  dataa: Event;
  rid: any;

  constructor(private userService:UserService,private dataService:DataService,private booksService :BooksService,private alertCtrl: AlertController,private formBuilder: FormBuilder,private router: Router,private route: ActivatedRoute, private authService: AuthService) { }
  form: FormGroup;
  async ngOnInit() {
    this.data;
    await this.dataService.getmenuid().then((val)=>
    {
     this.data = val;
    });

         console.log(this.data);
            console.log(this.data.owner);
    

        this.get();
    }

      async get() {
        this.loading = true;
       let restrnid = this.data.restid;
        let owner;
        const ownerId =  await this.authService. getTokenFromStorage();
        try{
          const decoded = jwt_decode(ownerId );
          owner = decoded['data']._id;
        }
        catch(ex){
        }
        
        const observable = await this.booksService.getmenu(
          restrnid 
        );
        observable.subscribe(
          data => {
            this.resturants = data.data;
            this.loading = false;
                this.rid = this.resturants[0].id;
          this.brek = this.resturants[0].breakfast;
          this.launh = this.resturants[0].launch;
          this.dnner = this.resturants[0].dinner;
          console.log(this.brek);
          console.log(this.launh);
          console.log(this.dnner);
        
          }, 
          err => {
            console.log('err', err);
          } 
        ); 
      }

     

      table(event:Event)
      {
        const ob = {};
      
        ob['id'] = this.data;
        this.dataa = event;
        console.log(this.dataa);
        this.dataService.savetableid(ob);
    this.router.navigateByUrl('/showtable');
      }
  }


