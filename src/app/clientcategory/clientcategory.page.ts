import { Component, OnInit } from '@angular/core';
import { Validators, FormGroup, FormBuilder } from '@angular/forms';
import { BooksService } from '../sdk/custom/books.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-clientcategory',
  templateUrl: './clientcategory.page.html',
  styleUrls: ['./clientcategory.page.scss'],
})
export class ClientcategoryPage implements OnInit {

  loading: boolean;

  constructor(private formBuilder: FormBuilder, private booksService: BooksService,private router: Router) { }
  registerForm: FormGroup;
  ngOnInit() {
    this.formInitializer();
  }

  formInitializer() {
    this.registerForm = this.formBuilder.group({
    account  : [null, [Validators.required]]
      
    });
}
Account() {

  this.loading = true;
 const loginData = this.registerForm.value;
 console.log('loginData', loginData);
  if(loginData.account === "Hotel")
  {
    this.router.navigateByUrl('/hotelsearch');
  }
  if(loginData.account === "Flat")
  {
    this.router.navigateByUrl('/searching');
  }
  if(loginData.account === "Resturant")
  {
    this.router.navigateByUrl('/resturantsearch');
  }
  //console.log(loginData);

}
}
