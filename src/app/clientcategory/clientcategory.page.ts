import { Component, OnInit } from '@angular/core';
import { Validators, FormGroup, FormBuilder } from '@angular/forms';
import { BooksService } from '../sdk/custom/books.service';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../sdk/core/auth.service';
import { AlertController, ModalController } from '@ionic/angular';
import * as jwt_decode from 'jwt-decode';
import { BarcodeScanner } from '@ionic-native/barcode-scanner/ngx';

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
  room: any;
  rent:boolean = false;

  constructor(private booksService: BooksService,private barcodeScanner: BarcodeScanner, private router: Router,private route: ActivatedRoute,private authService: AuthService, private formBuilder: FormBuilder,
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
hotel()
{
  this.router.navigateByUrl('/hotelsearch');
}
hall()
{
  this.router.navigateByUrl('/searchhall');

}
rest()
{
  this.router.navigateByUrl('/resturantsearch');
}

flt()
{
  this.router.navigateByUrl('/searching');
}
// Account() {

//   this.loading = true;
//  const loginData = this.registerForm.value;
//  console.log('loginData', loginData);
//   if(loginData.account === "Hotel")
//   {
//     this.router.navigateByUrl('/hotelsearch');
//   }
//   if(loginData.account === "Flat")
//   {
//     this.router.navigateByUrl('/searching');
//   }
//   if(loginData.account === "Resturant")
//   {
//     this.router.navigateByUrl('/resturantsearch');
//   }
//   if(loginData.account === "hall")
//   {
//     this.router.navigateByUrl('/searchhall');
//   }
//   //console.log(loginData);

// }


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

            
      if(this.dd.length > 0)
      {
           this.rent = true;
      }
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

async Scan()
  {

    this.barcodeScanner .scan() .then(async barcodeData => {
         console.log(barcodeData.text);
         let client;
         const ownerId =  await this.authService. getTokenFromStorage();
         const decoded = jwt_decode(ownerId );
         try{
           const decoded = jwt_decode(ownerId );
           client = decoded['data']._id;
         }
         catch(ex){
         }
         const obj = {};
     
          obj['roomqr'] =  JSON.parse(barcodeData.text);
          obj['client'] = client;
          const observable = await this.booksService.scanroom(
            obj
          );
          observable.subscribe(
            async data => {
              console.log('got response from server', data);
              if(data.message == "scaning verified")
              {
              //window.alert(' Room Scanned Verified');
              this.room = data.data;
              window.alert(' Room scaning verified' + data.data.Rooms);
              }
              if(data.message == "user not registered")
              {
                window.alert(' Room scaning Not verified');
              }
              this.loading = false;
          }),
            error => {
              this.loading = false;
              console.log('error', error);
            }
    });
 
          
  }



}
