import {Router} from '@angular/router';
import {FormGroup, Validators,FormBuilder} from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { BooksService } from '../sdk/custom/books.service';
@Component({
  selector: 'app-getservice',
  templateUrl: './getservice.page.html',
  styleUrls: ['./getservice.page.scss'],
})
export class GetservicePage implements OnInit {
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
  if(loginData.account === "Owner")
  {
    this.router.navigateByUrl('/userlogin');
  }
  if(loginData.account === "Client")
  {
    this.router.navigateByUrl('/clientlogin');
  }
  //console.log(loginData);

}

}
