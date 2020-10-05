import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { BarcodeScanner } from '@ionic-native/barcode-scanner/ngx';
import { AlertController } from '@ionic/angular';
import * as jwt_decode from 'jwt-decode';
import { AuthService } from '../sdk/core/auth.service';
import { BooksService } from '../sdk/custom/books.service';
import { DataService } from '../sdk/custom/data.services';

@Component({
  selector: 'app-reservedroom',
  templateUrl: './reservedroom.page.html',
  styleUrls: ['./reservedroom.page.scss'],
})
export class ReservedroomPage implements OnInit {
  // today = Date.now();
  data: any;
  array: any[];
  form: FormGroup;
  loading: boolean;
  roomss: any;
  owner: any;
  rom: any[];
  bookedarray: any;
  rm: any;
  hotelowner: any;
  from_date: any;
  minStartDate: any;
  enddate: any;
  range:any;
  amount: any;
  to_date: any;
  start: Date;
  too: Date;
  startt: Date;
  total: number;
  to: Date;
  check: boolean;
  from: any;
  dt: any;
  constructor(private booksService: BooksService,private barcodeScanner: BarcodeScanner,
    private alertCtrl: AlertController,
    private formBuilder: FormBuilder,private router: Router,private dataService:DataService,
    private route: ActivatedRoute, private authService: AuthService)
   {
          
   }
   ionViewWillEnter() {
    this. ngOnInit();
}
  async ngOnInit() {

    this.formInitializer();
    this.data;
    await this.dataService.getreserverom().then((val)=>
    {
     this.data = val;
    });
      console.log(this.data);
           console.log(this.data.hotelid);
           this.owner = this.data.hotelid;
           this.rm = this.data.romno;
           this.hotelowner = this.data.owner;
           this.amount = this.data.amount;
           console.log(this.amount);
           console.log(this.hotelowner);
      
  }
  
  formInitializer() {
    this.form = this.formBuilder.group({

    checkin : [null, [Validators.required]],
    checkout: [null, [Validators.required]],
    night: [null, [Validators.required]]
       });
}
  booked() 
  {
                   this.from =  this.from_date;
    this.start = new Date(this.from_date);
    this.start.getTime();
    this.start.setHours(0,0,0,0);
    
  }
time()
{
  this.dt = this.to_date;
  this.to = new Date(this.to_date);
       this. to.getTime();
  this.to.setHours(0,0,0,0);
  if(this.to>this.start)
  {
    let differenceInTime =  this.to.getTime() - this.start.getTime();
    let differenceInDays = Math.floor(differenceInTime / (1000 * 3600 * 24)); 
    if(differenceInDays>15)
    {
      window.alert("sorry we cannot book more than 15 days");
         return;
    }
    else
    {
    this.form.patchValue({night : differenceInDays});
     this.total = this.amount * differenceInDays;
     console.log(this.total);
    }
  }
  else
  {
    window.alert("sorry put another checkout");

    return;
  }
}


  async room() {
    console.log(this.start);
    console.log(this.to);
    if(this.to>this.start)
  {

  }
  else
  {
    window.alert("sorry put another checkout");

    return;
  }
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
               let nit = obj.nightstay;
               let inn = obj.checkin;
               let out = obj.checkout;
     obj['Rooms'] = this.rm;
     obj['checkin'] = this.from_date;
     obj['checkout'] = this.to_date;
     obj['ownerid'] = this.hotelowner
     obj['hotelid'] = this.owner;
     const observable = await this.booksService.reservedroom(
       obj
     );
     observable.subscribe(
       async data => {
          if(data['message'] == "room already booked")
         {
         
          window.alert('Room not avaiable please check another');
         }
         else{
         console.log('got response from server', data);
            console.log(data.data.Rooms.length);
            this. bookedarray = [];
          for(let i = 0; i<data.data.Rooms.length; i++)
          {
            this.bookedarray.push(data.data.Rooms[i]);
          }
          // this.bookedarray.push(data.result.Rooms[0].roomno);
         
        
         this.loading = false;
       
         this.form.reset();
        //    this.from = '';
        //  this.dt = '';
        console.log(this.bookedarray);
         //this.Encode();
         }
  
       },
       error => {
         this.loading = false;
        //  window.alert('Table alraedy reserved please check another');
         console.log('error', error);
       }
     );
      
   }
  



   async Encode() 
  {
    

    console.log(this.bookedarray);
    for (var i = 0; i < this.bookedarray.length ; i++)
    {
  
    this.barcodeScanner
      .encode(this.barcodeScanner.Encode.TEXT_TYPE, this.bookedarray[i])
      .then((data) => {
              window.alert(JSON.stringify("Your room code is:", data));
              window.alert('Your qr code room:'+ data);
              let qr = data;
             console.log(data);
        },
      
        err => {
          alert(JSON.stringify(err));
        });
    }


    
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

     obj['RoomReserved'] = this.bookedarray;
      obj['clientid'] = client;
     const observable = await this.booksService.roomcode(
       obj
     );
     observable.subscribe(
       async data => {
         console.log('got response from server', data);
         window.alert('qrcode Room generated');
         this.loading = false;
         
         //optional
 
       },
       error => {
         this.loading = false;
         console.log('error', error);
       }
     );
  }


  ////////////////////////// SCAN QR ///////////////////////


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
          const observable = await this.booksService.scanroom(
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


  pay()
  {
    const ob ={};
    ob['ownerid'] = this.hotelowner;
    ob['amount'] = this.total;
    this.dataService.setpay(ob);
    this.router.navigateByUrl('/paymenthotel');

  }

}
