import { Component, OnInit } from '@angular/core';
import { Validators, FormGroup, FormBuilder } from '@angular/forms';
import { BooksService } from '../sdk/custom/books.service';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../sdk/core/auth.service';
import { AlertController, ModalController } from '@ionic/angular';
import * as jwt_decode from 'jwt-decode';
import { BarcodeScanner } from '@ionic-native/barcode-scanner/ngx';
// import { flatMap } from 'rxjs/operators';



//import { StripeService, StripeCardComponent } from 'ngx-stripe';
//import { StripeCardElementOptions, StripeElementsOptions } from '@stripe/stripe-js';
// import { HttpClient } from '@angular/common/http';
// import { UserService } from '../sdk/custom/user.service';
// import { Router, ActivatedRoute } from '@angular/router';
// import { ModalController, Platform } from '@ionic/angular';
// import { BooksService } from '../sdk/custom/books.service';
// import { AuthService } from '../sdk/core/auth.service';
// import { File } from '@ionic-native/file/ngx'
@Component({ 
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  
 
  constructor(private booksService: BooksService,private barcodeScanner: BarcodeScanner, private router: Router,private route: ActivatedRoute,private authService: AuthService, private formBuilder: FormBuilder,
    private modalController: ModalController,private alertController: AlertController) {}



  // hotel()
  // {
  //   this.router.navigateByUrl('/hotelsearch');
  // }
  // hall()
  // {
  //   this.router.navigateByUrl('/searchhall');
  
  // }
  // rest()
  // {
  //   this.router.navigateByUrl('/resturantsearch');
  // }
  
  


}
