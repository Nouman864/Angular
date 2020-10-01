import {Validators} from '@angular/forms';
import {FormGroup, FormBuilder} from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { BooksService } from '../sdk/custom/books.service';
import { BarcodeScanner } from '@ionic-native/barcode-scanner/ngx';
import { AlertController } from '@ionic/angular';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthService } from '../sdk/core/auth.service';
import * as jwt_decode from 'jwt-decode';

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

  constructor(private booksService: BooksService,private barcodeScanner: BarcodeScanner,private alertCtrl: AlertController,private formBuilder: FormBuilder
    ,private router: Router,private route: ActivatedRoute, private authService: AuthService)
   {
    
  }
  
  form: FormGroup;

  ngOnInit() {
this.formInitializer();
this.route.queryParams.subscribe((params)=>{
  this.data = JSON.parse(params.data);
  console.log(this.data.rest);
  console.log(this.data.id);
  this.table =[];
  for(let i =0; i<this.data.rest.length; i++)
  {
  this.table.push(this.data.rest[i].Ta[0].Table);
  } 
  console.log(this.table[0].length);
  this.seltable = [];
  for(let j =0; j<this.table[0].length; j++)
  {
    this.seltable.push(this.table[0][j])
  }
  console.log(this.seltable);
  })
  }
  formInitializer() {
    this.form = this.formBuilder.group({
    partysize  : [null, [Validators.required]],
    date : [null, [Validators.required]],
    time  : [null, [Validators.required]]
       });
}

booked() 
  {
    
    this. array =[];
    for (var i = 0; i < this.seltable.length; i++)
    {
      if(this.seltable[i].checked === true)
      {
       this. array.push(
          this.seltable[i]
        )
      }
    }
    console.log(this.array);
   
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
  let ob =  this.form.value;
  let dt =   ob.date;
  let  tm =   ob.time;
  let size = ob.partysize;
  console.log(tm);
  console.log(size);

  
  const adtable =[];
    adtable.push({
      date: dt,
      time: tm,
        Booked: this.array
   })
  console.log(adtable);
   const obj =  this.form.value;
   obj['Table'] = adtable;
   obj['partysize'] = size;
   obj['clientid'] = clientid;
   const observable = await this.booksService.reservedTable(
     obj
   );
   observable.subscribe(
     async data => {
        if(data['message'] == "table already booked")
       {
       
        window.alert('Table alraedy reserved please check another');
       }
       else{
       console.log('got response from server', data);
        let tb = data.result.Table[0].Booked[0].tableno;
       this.loading = false;
       window.alert('Your Table has booked:'+ tb);
       this.form.reset();
       this.bookedarray = [];
       for(let i =0; i<data.result.Table[0].Booked.length; i++)
       {
            this.bookedarray.push(data.result.Table[0].Booked[i].tableno)
       }
       console.log(this.bookedarray);
       this.Encode();
       this.router.navigate(['/paymentprocess'],{
        queryParams:{data:JSON.stringify(this.data.id)}
    });
       }

     },
     error => {
       this.loading = false;
       window.alert('Table alraedy reserved please check another');
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
