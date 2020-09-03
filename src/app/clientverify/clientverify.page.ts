import { Component, OnInit } from '@angular/core';
import { Validators, FormGroup, FormBuilder } from '@angular/forms';
import { UserService } from '../sdk/custom/user.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-clientverify',
  templateUrl: './clientverify.page.html',
  styleUrls: ['./clientverify.page.scss'],
})
export class ClientverifyPage implements OnInit {
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
  clientForm: FormGroup;

  ngOnInit() {
   
    this.formInitializer();
  }
  formInitializer() {
    this.clientForm = this.formBuilder.group({
      email: [null, [Validators.required,Validators.email]]
    });
  }


  save() {
    const loginData = this.clientForm.value;
    console.log('loginData', loginData);
  
    this.userService.clientVerify(loginData).subscribe(
      
      data => {
        
        console.log('got response from server', data);
        this.loading = false;
        window.alert('email has activated');
        //this.router.navigateByUrl('/bookroom');
      
      },
      
      error => {
        this.loading = false;
      
        console.log('error', error);
      }
      
    );
  }

}
