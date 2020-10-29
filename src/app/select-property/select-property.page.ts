import {Validators} from '@angular/forms';
import {FormGroup, FormBuilder} from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-select-property',
  templateUrl: './select-property.page.html',
  styleUrls: ['./select-property.page.scss'],
})
export class SelectPropertyPage implements OnInit {
  loading: boolean;

  constructor(private formBuilder: FormBuilder,private router: Router) { }
  registerForm: FormGroup;
  ngOnInit() {
    this.formInitializer();
  }

  formInitializer() {
    this.registerForm = this.formBuilder.group({
    service  : [null, [Validators.required]]
      
    });
}

flat()
{
  this.router.navigateByUrl('/books');
}
rest()
{
  this.router.navigateByUrl('/getresturant');
}
hotel()
{
  this.router.navigateByUrl('/gethotel');
}
hall()
{
  this.router.navigateByUrl('/marraigehall');
}

Service() {
  
  this.loading = true;
 const loginData = this.registerForm.value;
 console.log('loginData', loginData);
  if(loginData.service === "Hotel")
  {
    this.router.navigateByUrl('/addhotel');
  }
  if(loginData.service === "Flat")
  {
    this.router.navigateByUrl('/books');
  }
  if(loginData.service === "Resturant")
  {
    this.router.navigateByUrl('/getresturant');
  }

  //console.log(loginData);

}


}
