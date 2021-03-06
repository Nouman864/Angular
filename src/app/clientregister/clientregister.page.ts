import {FormGroup, Validators} from '@angular/forms';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { UserService } from '../sdk/custom/user.service';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { Platform, ToastController } from '@ionic/angular';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-clientregister',
  templateUrl: './clientregister.page.html',
  styleUrls: ['./clientregister.page.scss'],
})
export class ClientregisterPage implements OnInit {
  @ViewChild('fileInput', {static: false}) fileInput: ElementRef;
  images: any;
multipleImages = [];
  loading: boolean;
  imag: any;
  dat: any;
  
  constructor(private userService:UserService,private formBuilder: FormBuilder,
    private platform: Platform,private http: HttpClient,private router: Router, private toastController: ToastController) {}
  clientForm: FormGroup;

  ngOnInit() {
    this.formInitializer();
  }
  selectMultipleImage(event)
  {
    if (event.target.files.length > 0) 
    {
       this.dat = event.target.files;
       console.log(this.dat.length);
      this.multipleImages = event.target.files;
    }



  }
  
  onMultipleSubmit(){
    const formData = new FormData();
    for(let img of this.multipleImages){
      console.log(img);
      formData.append('files', img);
    
    }
   
    this.http.post<any>('https://rehayash.herokuapp.com/clientprofile', formData).subscribe(
      
      async (data) =>{
        console.log(data);
       this.imag =  data['image'];
       console.log(this.imag);
       if(data)
      {
        const toast = await this.toastController.create({
          message: `${name} Image has been added successfully.`,
          duration: 3500
        });
        toast.present();
      }
      
      },
      
      (err) => console.log(err)
    );
  }
  formInitializer() {
    this.clientForm = this.formBuilder.group({
      firstname: ['', [Validators.required,  Validators.pattern('^[a-zA-Z ]*$')]],
      lastname: ['', [Validators.required,  Validators.pattern('^[a-zA-Z ]*$')]],
      email: ['', [Validators.required, Validators.pattern('^[_A-Za-z0-9-\\+]+(\\.[_A-Za-z0-9-]+)*@[A-Za-z0-9-]+(\\.[A-Za-z0-9]+)*(\\.[A-Za-z]{2,})$'),Validators.email]],
      password: ['', [Validators.required, ]],
      images: [null, [Validators.required]]
      
      
    });
  }


  save() {
    const ob = this.clientForm.value;
    console.log('loginData', ob);
    
     ob['image'] = this.imag;
    this.userService.clientRegister(ob).subscribe(
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
        this.router.navigateByUrl('/clientlogin');
        }
      },
      error => {
        this.loading = false;
        console.log('error', error);
      }
    ); 
  }

}
