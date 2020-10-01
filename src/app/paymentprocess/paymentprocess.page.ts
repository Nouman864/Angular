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
@Component({
  selector: 'app-paymentprocess',
  templateUrl: './paymentprocess.page.html',
  styleUrls: ['./paymentprocess.page.scss'],
})
export class PaymentprocessPage implements OnInit {

  loading: boolean;

  url: any;
  multipleImages:[];
  images: any[];
  detail: any;
  constructor(private formBuilder: FormBuilder,private router: Router,private route: ActivatedRoute,private authService: AuthService,private modalCtrl: ModalController,
    private booksService: BooksService, private file: File,private platform: Platform,private http: HttpClient,
    private userService:UserService) 
    {
               
    }
  registerForm: FormGroup;

  ngOnInit() {
    this.formInitializer();
    this.route.queryParams.subscribe((params)=>{
      //console.log(params);
      this.detail = JSON.parse(params.data);
      if (this.detail) {
        console.log(this.detail);
        //this.customerid = this.cd;
      }
      })
  }

  formInitializer() {
    this.registerForm = this.formBuilder.group({
   email: [null, [Validators.required, Validators.pattern('^[_A-Za-z0-9-\\+]+(\\.[_A-Za-z0-9-]+)*@[A-Za-z0-9-]+(\\.[A-Za-z0-9]+)*(\\.[A-Za-z]{2,})$'),Validators.email]],
   name: [null, [Validators.required, Validators.minLength(6), Validators.pattern('^[a-zA-Z ]*$')]],
   description: [null, [Validators.required]]
      
    });
}


async proceed()
{


    
  
    const obj =  this.registerForm.value;
    console.log(obj);
    const observable = await this.booksService.addcustomer(
      obj
    );
    observable.subscribe(
      async data => {
        console.log('got response from server', data);
        console.log(data);
        const jsonObj = JSON.parse(data.message);
        console.log(jsonObj);
        this.registerForm.reset();
        window.alert('Successfully Created');
        const objt ={};
        objt['cid'] = jsonObj;
        objt['detaill'] = this.detail;
        this.router.navigate(['/paymenttoken'],{
          queryParams:{data:JSON.stringify(objt)}
      });
      },
      error => {
        this.loading = false;
        console.log('error', error);
      }
    );
  }




}