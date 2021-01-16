import {Validators} from '@angular/forms';
import {FormGroup, FormBuilder} from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { BooksService } from '../sdk/custom/books.service';
import { BarcodeScanner } from '@ionic-native/barcode-scanner/ngx';
import { AlertController } from '@ionic/angular';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthService } from '../sdk/core/auth.service';
import * as jwt_decode from 'jwt-decode';
import { DataService } from '../sdk/custom/data.services';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-booktable',
  templateUrl: './booktable.page.html',
  styleUrls: ['./booktable.page.scss'],
})
export class BooktablePage implements OnInit {
  data: any;
  table: any;
  array: any[];
  loading: boolean;
  bookedarray: any[];
  qr: any;
  seltable: any[];

  constructor(private booksService: BooksService,private dataService: DataService,private barcodeScanner: BarcodeScanner,private alertCtrl: AlertController,private formBuilder: FormBuilder
    ,private router: Router, private datepipe: DatePipe,private route: ActivatedRoute, private authService: AuthService)
   {
    
  }
  
  form: FormGroup;

  async ngOnInit() {
this.formInitializer();
this.data;
    await this.dataService.getreserveid().then((val)=>
    {
     this.data = val;
    });
  console.log(this.data);


  this.form.patchValue({capacity: this.data.capacity});
  this.form.patchValue({type: this.data.type});

  }
  formInitializer() {
    this.form = this.formBuilder.group({
      name : ['', [Validators.required, Validators.minLength(6), Validators.pattern('^[a-zA-Z ]*$')]],
    type  : [null, [Validators.required]],
    capacity  : [null, [Validators.required]],
    date : [null, [Validators.required]],
    time  : [null, [Validators.required]]
       });
}


 async addNew() {
  let clientid;
  const ownerId =  await this.authService. getTokenFromStorage();
  const decoded = jwt_decode(ownerId );
  try{
    const decoded = jwt_decode(ownerId );
    clientid = decoded['data']._id;
  }
  catch(ex){
  }
  

   const obj =  this.form.value;
   let todt =this. datepipe. transform(obj.date, 'yyyy-MM-dd');
   obj['clientid'] = clientid;
   obj['date'] = todt;
   obj['restid'] =  this.data.rest;
   obj['tableno'] =   this.data.tabelno;
   obj['email'] =   this.data.email;
   const observable = await this.booksService.reservedTable(
     obj
   );
   observable.subscribe(
     async data => {
        
      window.alert('Your table has been booked');

     },
     error => {
       this.loading = false;
       
       console.log('error', error);
     }
   );
 }
 
 /////////////////////////CREATE QR CODE ///////////////////////////////

 async Encode() 
  {
    

    console.log(this.bookedarray);
    for (var i = 0; i < this.bookedarray.length ; i++)
    {
    //const TextToEncode = window.prompt("Enter tet to encode");
    this.barcodeScanner
      .encode(this.barcodeScanner.Encode.TEXT_TYPE, this.bookedarray[i])
      .then((data) => {
              window.alert(JSON.stringify("Your Table code is:", data));
              window.alert('Your qr code table:'+ data);
              let qr = data;
             console.log(data);
        },
      
        err => {
          alert(JSON.stringify(err));
        });
    }


    console.log(this.qr);
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

     obj['TableBooked'] = this.bookedarray;
      obj['clientid'] = client;
     const observable = await this.booksService.tablecode(
       obj
     );
     observable.subscribe(
       async data => {
         console.log('got response from server', data);
         window.alert('qrcode Table generated');
         this.loading = false;
         
         //optional
 
       },
       error => {
         this.loading = false;
         console.log('error', error);
       }
     );
  }


//   ////////////////////// SCANNING CODE/////////////////
  async Scan()
  {

    this.barcodeScanner .scan() .then(async barcodeData => {
         console.log(barcodeData.text);
         let i = 12;
         console.log(i);
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
     
          obj['tableqr'] =  JSON.parse(barcodeData.text);
          const observable = await this.booksService.scan(
            obj
          );
          observable.subscribe(
            async data => {
              console.log('got response from server', data);
              if(data.message == "scaning verified")
              {
              window.alert(' Table Scanned Verified');
              }
              if(data.message == "user not registered")
              {
                window.alert(' Table scaning cancelled');
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
