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
  selector: 'app-onlineflatpay',
  templateUrl: './onlineflatpay.page.html',
  styleUrls: ['./onlineflatpay.page.scss'],
})
export class OnlineflatpayPage implements OnInit {

  
  loading: boolean;

  url: any;
  multipleImages:[];
  images: any[];
  cd: any;
  customerid: any;
  ownerid: any;
  tokenid: any;
  charge: any;
  constructor(private formBuilder: FormBuilder,private router: Router,private route: ActivatedRoute,private authService: AuthService,private modalCtrl: ModalController,
    private booksService: BooksService, private dataService:DataService, private file: File,private platform: Platform,private http: HttpClient,
    private userService:UserService) 
    {
               
    }
  registerForm: FormGroup;

  async ngOnInit() 
  {
    this.formInitializer();
    this.cd;
    await this.dataService.getflatonlinepay().then((val)=>
    {
     this.cd= val;
    });
      console.log(this.cd);
      this.customerid = this.cd.cid;
        this.ownerid = this.cd.ownerid;
           this.tokenid = this.cd.tokid;
           this.charge = this.cd.amount;

       this.registerForm.patchValue({amount : this.charge});
  }

  formInitializer() 
  {
    this.registerForm = this.formBuilder.group({
   amount: [null, [Validators.required],Validators.minLength(3)],
   currency: [null, [Validators.required, Validators.minLength(3), Validators.pattern('^[a-zA-Z ]*$')]],
   description: [null, [Validators.required]]
      
    });
 }



     async card()
  {

    console.log(this.tokenid);
     const obj = this.registerForm.value;
     obj['cid'] =   this.customerid;
     obj['tokid'] = this.tokenid;
     obj['ownerid'] = this.ownerid;
     
               
     const observable = await this.booksService.payme(
      obj
    );
    observable.subscribe(
      async data => {
        console.log('got response from server', data);
        this.registerForm.reset();
        window.alert("Successfull payment");
      
      },
      error => 
      {
        this.loading = false;
        console.log('error', error);
      }
    );
  
    }
    


}
