import { AbstractControl, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

import { FormGroup } from '@angular/forms';
import { Subscription } from 'rxjs';
import { UserService } from '../sdk/custom/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-forgotpass',
  templateUrl: './forgotpass.page.html',
  styleUrls: ['./forgotpass.page.scss'],
})
export class ForgotpassPage implements OnInit {
  loading: boolean;

  constructor(private userService:UserService,private formBuilder: FormBuilder,private router: Router) {}
  registerForm: FormGroup;

  ngOnInit() {
    this.formInitializer();
  }

  formInitializer() {
    this.registerForm = this.formBuilder.group({
      email: [null, [Validators.required,Validators.email]],
      password: [null, [Validators.required]]
      
    });
}

save() {
  const loginData = this.registerForm.value;
  console.log('loginData', loginData);

  this.userService.updatePassword(loginData).subscribe(
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
back(){
  this.router.navigateByUrl('/userlogin');
}


}
