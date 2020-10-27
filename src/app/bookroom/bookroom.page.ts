import {create} from '@angular/language-service';
import { Component, OnInit } from '@angular/core';
import { Validators, FormGroup, FormBuilder } from '@angular/forms';
import { UserService } from '../sdk/custom/user.service';
import { AlertController } from '@ionic/angular';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthService } from '../sdk/core/auth.service';
import * as jwt_decode from 'jwt-decode';
import { BooksService } from '../sdk/custom/books.service';
import { combineAll } from 'rxjs/operators';
import { DataService } from '../sdk/custom/data.services';
import {
  BarcodeScannerOptions,
  BarcodeScanner
} from "@ionic-native/barcode-scanner/ngx";
@Component({
  selector: 'app-bookroom',
  templateUrl: './bookroom.page.html',
  styleUrls: ['./bookroom.page.scss'],
})
export class BookroomPage implements OnInit {
  loading: boolean;
  data: any;
  room:any;
  info: any;
  toastController: any;
  cateogory: any;
  Locat:any;
  rooms: any;
  dd: { id: string; }[];
  dataa: Event;
  loc: any;
  isChecked: boolean;
  rom: [];
  RoomReserved:any;
  array: any[];
  romid: any[];
  iddd: any;
  roomid: any;
  rmno: any;
  images: any[];
  pic: any;
  faci: any;
  hotelowner: any;
  booked: any[];
  hotel: any;
  books: any;
  email: any;
  
  constructor(private booksService: BooksService,private dataService:DataService,private barcodeScanner: BarcodeScanner,private alertCtrl: AlertController,private formBuilder: FormBuilder,private router: Router,private route: ActivatedRoute, private authService: AuthService)
   {
    
  }
  
  form: FormGroup;
  ionViewWillEnter() {
    this.ngOnInit();
}

  async ngOnInit()
   {
    this.formInitializer();
    this.data;
    await this.dataService.getroom().then((val)=>
    {
     this.data = val;
    });
      console.log(this.data);
    
      if (this.data) {
        console.log('got room', this.data);
        console.log(this.data.length);
        this.hotelowner = this.data.owner;
        this.info = this.data.room[0].Roomsinfo;
          console.log(this.pic);
          this.hotel = this.data.room[0].hotelid;
          console.log(this.hotel);
          console.log('this = ',this.info);
          console.log('this = ',this.info);
          this.email = this.data.email;


      }
     
      this. booked = [];
      for (var i = 0; i < this.info.length; i++)
      {
       
          this.booked[i] = this.info[i].roomno; 
    
     }
     console.log(this.booked);
      // this.images =[];
      // let j = 0;
      // for (var i = 0; i < this.data.room[0].Roomsinfo.length; i++)
      //  {
        
      //         this.pic = this.data.room[0].Roomsinfo[i].image.length;
     
      // }


      // console.log(this.pic);
      this.Booked();
  }
  
  formInitializer() {
    this.form = this.formBuilder.group({

      checkin: [null, [Validators.required]],
      checkout: [null, [Validators.required]]
    });
  }
  


  async Booked()
 {
    let owner;
  const ownerId =  await this.authService. getTokenFromStorage();
  try{
    const decoded = jwt_decode(ownerId );
    owner = decoded['data']._id;
  }
  catch(ex){
  }
   let obj = {};

      obj['idd'] = this.hotel;
      obj['info'] = this.info;
     const observable = await this.booksService.checkroom(
       obj
     );
     observable.subscribe(
       async data => {
         console.log('got response from server', data);
                this.books =  data.message;
               console.log(this.books);
         this.loading = false;
        
         
 
       },
       error => {
         this.loading = false;
         console.log('error', error);
       }
     );
}


reserve(i)
{
  
 
  // console.log(this.books.length);
        if(this.books.length)
    {
  
  let no = this.info[i].roomno;
  let charge = this.info[i].amount;
    for(let j=0; j<this.books.length; j++)
  {
      if(this.books[j] == no )
      {
        window.alert('Room alraedy Booked please Check another');
        return;
      }
  
  }

  let ob = {};
  ob['romno'] = no;
  ob['amount'] = charge;
  ob['hotelid'] = this.hotel;
  ob['owner'] = this.hotelowner;
  ob['email'] = this.email;

  this.dataService.bookrom(ob);
  this.router.navigateByUrl('/reservedroom');

}
else
{
  let no = this.info[i].roomno;
  let charge = this.info[i].amount;
  let ob = {};
  ob['romno'] = no;
  ob['amount'] = charge;
  ob['hotelid'] = this.hotel;
  ob['owner'] = this.hotelowner;
  ob['email'] = this.email;
  this.dataService.bookrom(ob);
  this.router.navigateByUrl('/reservedroom');
}
    
}
   
//  async Encode() 
//   {
//     this.romid =[];
//     // for (var i = 0; i < this.array.length ; i++)
//     //  {
//     //   this.romid.push(this.array[i].roomno.Roomid)
//     //  }
//     // for (var i = 0; i < this.array.length ; i++)
//     // {
//       //this.romid.push(this.array[i].roomno.Roomid)
//     //const TextToEncode = window.prompt("Enter tet to encode");
//     let Roomid = '111'
//     this.barcodeScanner
//       .encode(this.barcodeScanner.Encode.TEXT_TYPE, Roomid)
//       .then((data) => {
//               alert(JSON.stringify("Your Room code is:", data));
//              // console.log(data);
//         },
//         err => {
//           alert(JSON.stringify(err));
//         });
//     //  }
//     let client;
//     const ownerId =  await this.authService. getTokenFromStorage();
//     const decoded = jwt_decode(ownerId );
//     try{
//       const decoded = jwt_decode(ownerId );
//       client = decoded['data']._id;
//     }
//     catch(ex){
//     }
//     const obj =  this.form.value;

//      obj['RoomReserved'] = Roomid;
//       obj['clientid'] = client;
//      const observable = await this.booksService.Qrcode(
//        obj
//      );
//      observable.subscribe(
//        async data => {
//          console.log('got response from server', data);
//          window.alert('qrcode Rooms generated');
//          this.loading = false;
         
//          //optional
 
//        },
//        error => {
//          this.loading = false;
//          console.log('error', error);
//        }
//      );
//   }
                
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
    const ob =  this.form.value;
    const check =   ob.checkin;
    
    const adrom =[];
      adrom.push({
        checkin: check,
        Rooms: this.array
     })
    
     const obj =  this.form.value;
     obj['Room'] = adrom;
     obj['clientid'] = clientid;
     const observable = await this.booksService.reservedRoom(
       obj
     );
     observable.subscribe(
       async data => {
         console.log('got response from server', data);
      
         this.loading = false;
         this.form.reset();
         //optional
 
       },
       error => {
         this.loading = false;
         window.alert('Room alraedy reserved please check another');
         console.log('error', error);
       }
     );
   }

   






   ////////// SCANNER/////////////////
  
  // async Scan()
  // {
  //   this.barcodeScanner .scan() .then(async barcodeData => {
  //        console.log(barcodeData.text);
  //        let client;
  //        const ownerId =  await this.authService. getTokenFromStorage();
  //        const decoded = jwt_decode(ownerId );
  //        try{
  //          const decoded = jwt_decode(ownerId );
  //          client = decoded['data']._id;
  //        }
  //        catch(ex){
  //        }
  //        const obj =  this.form.value;
     
  //         obj['roomqr'] = barcodeData.text;
  //         const observable = await this.booksService.scanroom(
  //           obj
  //         );
  //         observable.subscribe(
  //           async data => {
  //             console.log('got response from server', data);
  //             window.alert(' Rooms Scanned Verified');
  //             this.loading = false;
  //           },
  //           error => {
  //             this.loading = false;
  //             console.log('error', error);
  //           }
  //         );
 
  //         });
  // }

}
