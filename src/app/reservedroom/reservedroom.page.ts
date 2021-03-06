import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { BarcodeScanner } from '@ionic-native/barcode-scanner/ngx';
import { AlertController } from '@ionic/angular';
import * as jwt_decode from 'jwt-decode';
import { AuthService } from '../sdk/core/auth.service';
import { BooksService } from '../sdk/custom/books.service';
import { DataService } from '../sdk/custom/data.services';
import { DatePipe } from '@angular/common';
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
  jj = 0;
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
  email: any;
  in: string;
  out: string;
  constructor(private booksService: BooksService,private barcodeScanner: BarcodeScanner,
    private alertCtrl: AlertController,
    private datepipe: DatePipe,
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
           this.email = this.data.email;
      
  }
  
  formInitializer() {
    this.form = this.formBuilder.group({

    // checkin : [null, [Validators.required]],
    // checkout: [null, [Validators.required]],
    night: [null, [Validators.required]],
    cnic: [null, [Validators.required, Validators.minLength(13),Validators.pattern(/^[0-9]\d*$/)]],
    
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
    if(this.jj == 1)
    {
       return;
    }
    else
    {
     window.alert("sorry put another checkout");
    return;
    }
  }
}


  async room() {
    
    console.log(this.start);
    console.log(this.to);
    if(this.to>this.start)
  {

  }
  // else
  // {
  //   window.alert("sorry put another checkout");
  //   return;
  // }
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
               let str =this. datepipe. transform(this.from_date, 'yyyy-MM-dd');
               let todt =this. datepipe. transform(this.to_date, 'yyyy-MM-dd');
               this.in = str;
               this.out = todt;
     obj['Rooms'] = this.rm;
     obj['checkin'] = str;
     obj['checkout'] = todt;
     obj['ownerid'] = this.hotelowner
     obj['hotelid'] = this.owner;
     obj['clientid'] = clientid;
     obj['email'] = this.email;
     const observable = await this.booksService.reservedroom(
       obj
     );
     observable.subscribe(
       async data => {
          
          console.log(data);
          if(data.message == "room booked")
          {
            window.alert('Your room is booked');
            console.log('got response from server', data);
            // console.log(data.data.Rooms.length);
          }
         
          //   this. bookedarray = [];
          // for(let i = 0; i<data.data.Rooms.length; i++)
          // {
          //   this.bookedarray.push(data.data.Rooms[i]);
          // }
          // this.bookedarray.push(data.result.Rooms[0].roomno);
         
        
         this.loading = false;
         this.form.reset();
          this.jj = 1;
         this.from_date = '';
         this.to_date = '';
      

         this.Encode();
         
  
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
    

    console.log(this.rm);

    this.barcodeScanner
      .encode(this.barcodeScanner.Encode.TEXT_TYPE, this.rm)
      .then((data) => {
              window.alert(JSON.stringify("Your room code is:", data));
              window.alert('Your qr code room:'+ data);
              let qr = data;
             console.log(data);
        },
      
        err => {
          alert(JSON.stringify(err));
        });
    


    
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

     obj['RoomReserved'] = this.rm;
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


  


  pay()
  {
    const ob ={};
    ob['ownerid'] = this.hotelowner;
    ob['amount'] = this.total;
    this.dataService.setpay(ob);
    this.router.navigateByUrl('/paymenthotel');

  }

}
