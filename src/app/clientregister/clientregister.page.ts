import {FormGroup, Validators} from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { UserService } from '../sdk/custom/user.service';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-clientregister',
  templateUrl: './clientregister.page.html',
  styleUrls: ['./clientregister.page.scss'],
})
export class ClientregisterPage implements OnInit {

  loading: boolean;
  
  constructor(private userService:UserService,private formBuilder: FormBuilder,private router: Router) {}
  clientForm: FormGroup;

  ngOnInit() {
    this.formInitializer();
  }

  formInitializer() {
    this.clientForm = this.formBuilder.group({
      firstname: ['', [Validators.required, Validators.minLength(6), Validators.pattern('^[a-zA-Z ]*$')]],
      lastname: ['', [Validators.required, Validators.minLength(6), Validators.pattern('^[a-zA-Z ]*$')]],
      email: ['', [Validators.required, Validators.pattern('^[_A-Za-z0-9-\\+]+(\\.[_A-Za-z0-9-]+)*@[A-Za-z0-9-]+(\\.[A-Za-z0-9]+)*(\\.[A-Za-z]{2,})$'),Validators.email]],
      password: ['', [Validators.required, Validators.minLength(5)]],
      
      
    });
  }


  save() {
    const loginData = this.clientForm.value;
    console.log('loginData', loginData);

    this.userService.clientRegister(loginData).subscribe(
      data => {
        console.log('got response from server', data);
        if(data.message1 == "This email has been registered already")
        {
          window.alert('This email has been registered already,try another email');
        }
        else
        {
        this.loading = false;
        window.alert('Activate your email');
        //this.router.navigateByUrl('/bookroom');
        }
      },
      error => {
        this.loading = false;
        console.log('error', error);
      }
    );
  }

}
