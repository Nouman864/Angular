import {ActivatedRoute} from '@angular/router/router';

import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { FormGroup } from '@angular/forms';
import { UserService } from '../sdk/custom/user.service';
import { AuthService } from '../sdk/core/auth.service';
import { AlertController } from '@ionic/angular';
@Component({
  selector: 'app-userlogin',
  templateUrl: './userlogin.page.html',
  styleUrls: ['./userlogin.page.scss'],
})
export class UserloginPage implements OnInit {
  
  loading: boolean;

  constructor(private userService:UserService,private alertCtrl: AlertController,private formBuilder: FormBuilder,private router: Router, private authService: AuthService)
   {
      
  }
  
  loginForm: FormGroup;

  ngOnInit() {
    this.formInitializer();
  }
  formInitializer() {
    this.loginForm = this.formBuilder.group({
      email: [null, [Validators.required,Validators.email]],
      password: [null, [Validators.required]]
    });
  }
  


  save() {
    const loginData = this.loginForm.value;
    console.log('loginData', loginData);
  
//this.presentAlert();
    this.userService.userLogin(loginData).subscribe(
      
      data => {
        
        console.log('got response from server', data);
        this.loading = false;
      if(data.message == "User not registered")
      {
        window.alert('This User not registered');
        return 0;
      }
        
        this.authService.saveTokenToStorage(data.token);
         this.router.navigateByUrl('/select-property');
      },
      
      error => {
        this.loading = false;
        console.log("dfsdgdsfghdsfhf");
      
        console.log('error', error);
      }
      
    );
  }
  
  async presentAlert() {
  let alert = await this.alertCtrl.create({
    message:"dslkff",
    buttons: ['ok']
  });
  await alert.present();
}
  
}


