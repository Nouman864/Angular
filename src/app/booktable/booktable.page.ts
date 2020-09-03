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

  constructor(private booksService: BooksService,private barcodeScanner: BarcodeScanner,private alertCtrl: AlertController,private formBuilder: FormBuilder
    ,private router: Router,private route: ActivatedRoute, private authService: AuthService)
   {
    
  }
  
  form: FormGroup;

  ngOnInit() {
this.formInitializer();
this.route.queryParams.subscribe((params)=>{
  this.data = JSON.parse(params.data);
  this.table = this.data[0].Ta[0].Table;
console.log(this.table);
  })
  }
  formInitializer() {
    this.form = this.formBuilder.group({
    checkin  : [null, [Validators.required]]
       });
}

booked() 
  {
    
    this. array =[];
    for (var i = 0; i < this.table.length ; i++)
    {
      if(this.table[i].checked === true)
      {
       this. array.push(
          this.table[i]
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
  const ob =  this.form.value;
  const check =   ob.checkin;
  
  const adtable =[];
    adtable.push({
      checkin: check,
        Booked: this.array
   })
  console.log(adtable);
   const obj =  this.form.value;
   obj['Table'] = adtable;
   obj['clientid'] = clientid;
   const observable = await this.booksService.reservedTable(
     obj
   );
   observable.subscribe(
     async data => {
       console.log('got response from server', data);
        let tb = data.result.Table[0].Booked[0].tableno;
       this.loading = false;
       window.alert('Your Table has booked:'+ tb);
       this.form.reset();
       //optional

     },
     error => {
       this.loading = false;
       window.alert('Table alraedy reserved please check another');
       console.log('error', error);
     }
   );
 }

 
}
