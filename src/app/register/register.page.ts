import { AbstractControl, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

import { FormGroup } from '@angular/forms';
import { Subscription } from 'rxjs';
import { UserService } from '../sdk/custom/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss']
})
export class RegisterPage implements OnInit {
  loading: boolean;
  
  constructor(private userService:UserService,private formBuilder: FormBuilder,private router: Router) {}
  registerForm: FormGroup;

  ngOnInit() {
    this.formInitializer();
  }

  formInitializer() {
    this.registerForm = this.formBuilder.group({
      firstname: ['', [Validators.required, Validators.minLength(6), Validators.pattern('^[a-zA-Z ]*$')]],
      lastname: ['', [Validators.required, Validators.minLength(6), Validators.pattern('^[a-zA-Z ]*$')]],
      cnic: [null, [Validators.required, Validators.minLength(13),Validators.pattern(/^[0-9]\d*$/)]],
      phone:[null, [Validators.required, Validators.minLength(11),Validators.pattern(/^[0-9]\d*$/)]],
      email: ['', [Validators.required, Validators.pattern('^[_A-Za-z0-9-\\+]+(\\.[_A-Za-z0-9-]+)*@[A-Za-z0-9-]+(\\.[A-Za-z0-9]+)*(\\.[A-Za-z]{2,})$'),Validators.email]],
      password: ['', [Validators.required, Validators.minLength(5)]],
      
    });
  }


  save() {
    const loginData = this.registerForm.value;
    console.log('loginData', loginData);

    this.userService.userRegister(loginData).subscribe(
      data => {
        console.log('got response from server', data);
        this.loading = false;
        window.alert('Activate your email');
      },
      error => {
        this.loading = false;
        console.log('error', error);
      }
    );
  }
}
