import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
 
//import { StripeService, StripeCardComponent } from 'ngx-stripe';
//import { StripeCardElementOptions, StripeElementsOptions } from '@stripe/stripe-js';
import { HttpClient } from '@angular/common/http';
import { UserService } from '../sdk/custom/user.service';
import { Router, ActivatedRoute } from '@angular/router';
import { ModalController, Platform } from '@ionic/angular';
import { BooksService } from '../sdk/custom/books.service';
import { AuthService } from '../sdk/core/auth.service';
import { File } from '@ionic-native/file/ngx';
import * as jwt_decode from 'jwt-decode';
import { DataService } from '../sdk/custom/data.services';
@Component({
  selector: 'app-paymenttokenhotel',
  templateUrl: './paymenttokenhotel.page.html',
  styleUrls: ['./paymenttokenhotel.page.scss'],
})
export class PaymenttokenhotelPage implements OnInit {

  loading: boolean;

  url: any;
  multipleImages:[];
  images: any[];
  tokenid: any;
  customerid: any;
  cd: any;
  amount: any;
  ownerid: any;
  total: any;
  constructor(private formBuilder: FormBuilder,private router: Router,private route: ActivatedRoute,private authService: AuthService,private modalCtrl: ModalController,
    private booksService: BooksService,private dataService:DataService, private file: File,private platform: Platform,private http: HttpClient,
    private userService:UserService) 
    {
               
    }
  registerForm: FormGroup;
  ionViewWillEnter() {
    this. ngOnInit();
}
  async ngOnInit() {
    this.formInitializer();

    this.cd;
    await this.dataService.gettokenhotel().then((val)=>
    {
     this.cd= val;
    });
      console.log(this.cd);
      if (this.cd) {
        console.log(this.cd);
        this.customerid = this.cd.cid;
        this.ownerid = this.cd.detaill;
        this.total = this.cd.amount;
        console.log(this.customerid);
        console.log( this.ownerid);
        console.log(this.total);
        
      }
    
  }

  formInitializer() {
    this.registerForm = this.formBuilder.group({
   number: [null, [Validators.required, Validators.pattern(/^(?:4[0-9]{12}(?:[0-9]{3})?|5[1-5][0-9]{14}|6(?:011|5[0-9][0-9])[0-9]{12}|3[47][0-9]{13}|3(?:0[0-5]|[68][0-9])[0-9]{11}|(?:2131|1800|35\d{3})\d{11})$/)]],
   exp_month: [null, [Validators.required]],
   exp_year: [null, [Validators.required]],
   cvc: [null, [Validators.required, Validators.minLength(4)]]
      
    });
}


async proceed()
{
    const obj =  this.registerForm.value;
    console.log(obj);
    const observable = await this.booksService.addhoteltoken(
      obj
    );
    observable.subscribe(
      async data => {
        console.log('got response from server', data);
        console.log(data.message.id);
        this.tokenid = data.message.id;
        this.registerForm.reset();
        window.alert('Successfully Created');
        const obj ={};
     obj['cid'] =   this.customerid;
     obj['amount'] = this.total;
     obj['tokid'] = this.tokenid;
     obj['ownerid'] = this.ownerid;
     this.dataService.savepay(obj);
    this.router.navigateByUrl('/onlinepay');
      
      },
      error => {
        this.loading = false;
        console.log('error', error);
      }
    );
  }
 

  


}
