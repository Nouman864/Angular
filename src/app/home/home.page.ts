
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
@Component({ 
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  loading: boolean;

  url: any;
  multipleImages:[];
  constructor(private formBuilder: FormBuilder,private router: Router,private route: ActivatedRoute,private authService: AuthService,private modalCtrl: ModalController,
    private booksService: BooksService, private file: File,private platform: Platform,private http: HttpClient,
    private userService:UserService) 
    {
               
    }
  registerForm: FormGroup;

  ngOnInit() {
    this.formInitializer();
  }

  formInitializer() {
    this.registerForm = this.formBuilder.group({
      number: [null, [Validators.required]],
      exp_month: [null, [Validators.required]],
      exp_year: [null, [Validators.required]],
      cvc: [null, [Validators.required]]
      
    });
}

proceed() {
  const loginData = this.registerForm.value;
  console.log('loginData', loginData);

  this.userService.customer(loginData).subscribe(
    data => {
      console.log('got response from server', data);
      this.loading = false;
      
    },
    error => {
      this.loading = false;
      console.log('error', error);
    }
  );
}


selectMultipleImage(event){
  if (event.target.files.length > 0) {
    this.multipleImages = event.target.files;
  }
}

onMultipleSubmit(){
  const formData = new FormData();
//  console.log(this.flatid);
  for(let img of this.multipleImages){
    console.log(img);
    formData.append('files', img);
    // formData.append('ID', this.flatid);
  }
 
  this.http.post('http://localhost:3000/upload_images', formData).subscribe(
    
    (data) =>{
      console.log(data);
    
    },
    
    (err) => console.log(err)
  );
}








   
   
   
   



}


