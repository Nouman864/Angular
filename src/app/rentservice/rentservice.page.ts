import { Component, OnInit, Input } from '@angular/core';
import { Validators, FormGroup, FormBuilder } from '@angular/forms';
import { BooksService } from '../sdk/custom/books.service';
import { Platform, ToastController, ModalController, PopoverController } from '@ionic/angular';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthService } from '../sdk/core/auth.service';
import * as jwt_decode from 'jwt-decode';
import { DataService } from '../sdk/custom/data.services';
@Component({
  selector: 'app-rentservice',
  templateUrl: './rentservice.page.html',
  styleUrls: ['./rentservice.page.scss'],
})
export class RentservicePage implements OnInit {
  data: any;
  loading: boolean;

  constructor(private formBuilder: FormBuilder,private router: Router,private route: ActivatedRoute,private authService: AuthService,private modalCtrl: ModalController,
    private toastController: ToastController,private popoverController: PopoverController,private dataService:DataService,
    private booksService: BooksService,private platform: Platform) 
    {

    }
      

    dataa:any;
  form: FormGroup;

  async ngOnInit() {
    this.formInitializer();
    this.data;
    await this.dataService.getrentflat().then((val)=>
    {
     this.data = val;
    });
      if (this.data)
       {
        console.log(this.data);

      }
    
      
  }
  formInitializer() {
    
    this.form = this.formBuilder.group({
      name : [null, [Validators.required, Validators.minLength(2), Validators.pattern('^[a-zA-Z ]*$')]],
      number: [null, [Validators.required, Validators.minLength(11),Validators.pattern(/^[0-9]\d*$/)]],
      about : [null, [Validators.required, Validators.minLength(3), Validators.pattern('^[a-zA-Z ]*$')]]
      });
  }






  async submit()
  {
  
     
   
     const obj =  this.form.value;
     console.log(obj);
      obj['email'] = this.data.email;
    //  obj['image'] = this.img;
     const observable = await this.booksService.emailnotify(
       obj
     );
     observable.subscribe(
       async data => {
         console.log('got response from server', data);
         console.log(data);
         this.loading = false;
         this.form.reset();
 
       },
       error => {
         this.loading = false;
         console.log('error', error);
       }
     );
  }


  pay()
  {
    console.log(this.data);
    this.dataService.flatpay(this.data);
    this.router.navigateByUrl('/paymentprocess');
  }
}
