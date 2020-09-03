import { Component, OnInit } from '@angular/core';
import { Validators, FormGroup, FormBuilder } from '@angular/forms';
import { UserService } from '../sdk/custom/user.service';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';
import { AuthService } from '../sdk/core/auth.service';

@Component({
  selector: 'app-clientlogin',
  templateUrl: './clientlogin.page.html',
  styleUrls: ['./clientlogin.page.scss'],
})
export class ClientloginPage implements OnInit {
  loading: boolean;

  constructor(private userService:UserService,private alertCtrl: AlertController,private formBuilder: FormBuilder,private router: Router, private authService: AuthService)
   {
      
  }
  
  clientForm: FormGroup;

  ngOnInit() {
    this.formInitializer();
  }
  formInitializer() {
    this.clientForm = this.formBuilder.group({
      email: [null, [Validators.required,Validators.email]],
      password: [null, [Validators.required]]
    });
  }
  


  save() {
    const loginData = this.clientForm.value;
    console.log('loginData', loginData);
  
//this.presentAlert();
    this.userService.clientLogin(loginData).subscribe(
      
      data => {
        
        console.log('got response from server', data);
        this.loading = false;
        this.authService.saveTokenToStorage(data.token);
         this.router.navigateByUrl('/clientcategory');
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
