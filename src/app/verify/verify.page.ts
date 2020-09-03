
import {ActivatedRoute} from '@angular/router/';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { FormGroup } from '@angular/forms';
import { UserService } from '../sdk/custom/user.service';


@Component({
  selector: 'app-verify',
  templateUrl: './verify.page.html',
  styleUrls: ['./verify.page.scss'],
  
})
export class VerifyPage implements OnInit {
  loading: boolean;
  params: string;
  verify: string;
  sub: any;
  page: number;
  token: string;
  constructor(private userService:UserService,private formBuilder: FormBuilder,private route: ActivatedRoute,private router: Router) {
    
    {
      this.route.queryParams.subscribe(params => {
            let token = params['token'];
            console.log(token); // Print the parameter to the console. 
        });
      
    }
    
  }
  loginForm: FormGroup;

  ngOnInit() {
   
    this.formInitializer();
  }
  formInitializer() {
    this.loginForm = this.formBuilder.group({
      email: [null, [Validators.required,Validators.email]]
    });
  }


  save() {
    const loginData = this.loginForm.value;
    console.log('loginData', loginData);
  
    this.userService.userVerify(loginData).subscribe(
      
      data => {
        
        console.log('got response from server', data);
        this.loading = false;
        window.alert(' email has activated');
         this.router.navigateByUrl('/userlogin');
      },
      
      error => {
        this.loading = false;
      
        console.log('error', error);
      }
      
    );
  }

}
