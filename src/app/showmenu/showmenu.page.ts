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

  constructor(private userService:UserService,private booksService :BooksService,private alertCtrl: AlertController,private formBuilder: FormBuilder,private router: Router,private route: ActivatedRoute, private authService: AuthService) { }
  form: FormGroup;
  ngOnInit() {
    this.route.queryParams.subscribe((params)=>{
      console.log(params);
      this.data = JSON.parse(params.data);
    console.log(this.data);
      })
        this.get()
    }

      async get() {
        this.loading = true;
       let restrnid = this.data;
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
            console.log('data',data);
            this.brek = data.data[0].AvailableTime[0].breakfast;
            this.launh = data.data[0].AvailableTime[0].launch;
            this.dnner = data.data[0].AvailableTime[0].dinner;
            console.log(this.brek);
        
          }, 
          err => {
            console.log('err', err);
          } 
        ); 
      }

      menu(event:Event)
      {
        this.dataa = event;
        console.log(this.dataa);
        this.router.navigate(['/booktable'],{
            queryParams:{data:JSON.stringify(this.dataa)}
        });
      }

  }

