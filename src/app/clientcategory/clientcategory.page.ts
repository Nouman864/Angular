import { Component, OnInit } from '@angular/core';
import { Validators, FormGroup, FormBuilder } from '@angular/forms';
import { BooksService } from '../sdk/custom/books.service';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../sdk/core/auth.service';
import { AlertController, ModalController } from '@ionic/angular';
import * as jwt_decode from 'jwt-decode';

@Component({
  selector: 'app-clientcategory',
  templateUrl: './clientcategory.page.html',
  styleUrls: ['./clientcategory.page.scss'],
})
export class ClientcategoryPage implements OnInit {

  loading: boolean;
  data: any;
  dd: any;
  info: any;
  flat: any[];
  rom: any;
  images: any[];

  constructor(private booksService: BooksService, private router: Router,private route: ActivatedRoute,private authService: AuthService, private formBuilder: FormBuilder,
    private modalController: ModalController,private alertController: AlertController) {}
  
  registerForm: FormGroup;
  ionViewWillEnter() {
    this.ngOnInit();
    
}
  ngOnInit() {
    this.formInitializer();
    this.getclient();
    this.clientflat();
    this.getclientroom();
  }

  formInitializer() {
    this.registerForm = this.formBuilder.group({
     account  : [null, [Validators.required]],
      firstname: ['', [Validators.required, Validators.minLength(6), Validators.pattern('^[a-zA-Z ]*$')]],
      lastname: ['', [Validators.required, Validators.minLength(6), Validators.pattern('^[a-zA-Z ]*$')]],
      email: ['', [Validators.required, Validators.pattern('^[_A-Za-z0-9-\\+]+(\\.[_A-Za-z0-9-]+)*@[A-Za-z0-9-]+(\\.[A-Za-z0-9]+)*(\\.[A-Za-z]{2,})$'),Validators.email]]
  
      
      
  
    });
}
Account() {

  this.loading = true;
 const loginData = this.registerForm.value;
 console.log('loginData', loginData);
  if(loginData.account === "Hotel")
  {
    this.router.navigateByUrl('/hotelsearch');
  }
  if(loginData.account === "Flat")
  {
    this.router.navigateByUrl('/searching');
  }
  if(loginData.account === "Resturant")
  {
    this.router.navigateByUrl('/resturantsearch');
  }
  //console.log(loginData);

}


  async getclient()
{
  let owner;
    this.loading = true;
    
    const ownerId =  await this.authService. getTokenFromStorage();
    console.log(ownerId);
    try{
      const decoded = jwt_decode(ownerId );
     owner = decoded['data']._id;
    }
    catch(ex){
    }
    
    const observable = await this.booksService.getclient(
      owner
    );
    observable.subscribe(
      data => {
        this.data = data.data;
        this.loading = false;
        console.log(this.data);
        this. registerForm.patchValue({firstname: this.data.firstname});
        this. registerForm.patchValue({lastname: this.data.lastname});
        this. registerForm.patchValue({email: this.data.email});


        console.log(this.data.image.length);
        this.images =[];
        for (var i = 0; i < this.data.image.length; i++)
         {
          
         this.images[i] = this.data.image[i];
       
        }
  
      }, 
      err => {
        console.log('err', err);
      } 
    );
  

}
  async clientflat()
{
  let owner;
  this.loading = true;
  
  const ownerId =  await this.authService. getTokenFromStorage();
  console.log(ownerId);
  try{
    const decoded = jwt_decode(ownerId );
   owner = decoded['data']._id;
  }
  catch(ex){
  }
  
   let ob = {};
   ob['owner'] = owner;
  const observable = await this.booksService.getviewflat(
    ob
  );
  observable.subscribe(
    data => {
      this.dd = data.data;
      this.loading = false;


      console.log(this.dd);
      // this. flat = [];
      //  this.flat = this.dd;
      //     this.dd.date;
      //    this.dd.date;
      //   console.log(this.flat);
      

    }, 
    err => {
      console.log('err', err);
    } 
  );
}


  async getclientroom()
{
  let owner;
  this.loading = true;
  
  const ownerId =  await this.authService. getTokenFromStorage();
  console.log(ownerId);
  try{
    const decoded = jwt_decode(ownerId );
   owner = decoded['data']._id;
  }
  catch(ex){
  }
  
   let ob = {};
   ob['owner'] = owner;
  const observable = await this.booksService.getclientreservedrm(
    ob
  );
  observable.subscribe(
    data => {
      this.rom = data.data;
      this.loading = false;


      console.log(this.rom);
      // this. flat = [];
      //  this.flat = this.dd;
      //     this.dd.date;
      //    this.dd.date;
      //   console.log(this.flat);
      

    }, 
    err => {
      console.log('err', err);
    } 
  );




}





}
