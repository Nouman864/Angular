import {AuthService} from '../sdk/core/auth.service';
import {Input, ElementRef, ViewChild} from '@angular/core/';
import {ToastController, ModalController, Platform, AlertController} from '@ionic/angular';
import {FormBuilder} from '@angular/forms/';
import {Router, ActivatedRoute} from '@angular/router/';
import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators } from '@angular/forms';
import { BooksService } from '../sdk/custom/books.service';
import * as jwt_decode from 'jwt-decode';
import { __param } from 'tslib';
import { File } from '@ionic-native/file/ngx';
import { toBase64String } from '@angular/compiler/src/output/source_map';
import { HttpClient } from '@angular/common/http';
import { UserService } from '../sdk/custom/user.service';
import { async } from 'q';
@Component({
  selector: 'app-addtable',
  templateUrl: './addtable.page.html',
  styleUrls: ['./addtable.page.scss'],
})
export class AddtablePage implements OnInit {

  service: any;
  totl: any;
  breakfast =[];
  launch =[];
  dinner =[];
  time = [];
  tabll = [];
  tabletype = [];
  tablecapacity = [];
  menutype: any;
  id: any;
  loading: boolean;
  tableno: any;
  MENU: any;
  menus: any;
  l = 0;
  fast = 0;
  lauch = 0;
  dinnr = 0;
  tab: any[];
  TABLE: any;
  showtable: any;
  index: any;
  deleteLoading: boolean;
  
  constructor(private formBuilder: FormBuilder,private router: Router,private route: ActivatedRoute,private authService: AuthService,private modalCtrl: ModalController,
    private booksService: BooksService,private alertController: AlertController, private toastController: ToastController, private file: File,private platform: Platform,private http: HttpClient,
    private userService:UserService) 
     {
}

form: FormGroup;

ngOnInit() {
this.formInitializer();
this.route.queryParams.subscribe((params)=>{
  console.log(params);
  this.id = JSON.parse(params.data);
    console.log(this.id);


  
  
  });
  this.gettable();
}

formInitializer() {
this.form = this.formBuilder.group({
  tableno:[null,[Validators.minLength(1), Validators.pattern(/^[0-9]\d*$/)]],
  type : [null, [Validators.required]],
  capacity : [null, [Validators.required]],
 
});
}



///////////////////get TABLE.////////////////////////////////


async gettable() {
  this.loading = true;
  let owner1 = this.id;
  const ownerId =  await this.authService. getTokenFromStorage();
  console.log(ownerId);
  try{
    const decoded = jwt_decode(ownerId );
   let owner = decoded['data']._id;
  }
  catch(ex){
  }
  console.log(owner1);
  const observable = await this.booksService.gettable(
    owner1
  );
  observable.subscribe(
    data => {
      this.menus = data.data;
      this.loading = false;
      console.log( data);
      if(data.data.length > 0)
      {
       console.log(data.data[0]._id);
      this.TABLE = data.data[0]._id;
      this.showtable = data.data[0].Ta;
      console.log(this.showtable);
      }

    }, 
    err => {
      console.log('err', err);
    } 
  );
}




///////////////////////// TABLES /////////////////////////

table()
{
     let tabel = this.form.value.tableno;
     if(!Number(tabel))
    {
      window.alert('sorry,put number type');
        return ;
    }
     let  type = this.form.value.type;
     let capacity = this.form.value.capacity;
     if( this.l == 1)
  {
     console.log(this.tabll);
     for(let j = 0; j<this.tabll.length; j++)
     {
      if(this.tabll[j].tabel == tabel )
      {
         window.alert('Table alraedy Added please add another');
         this.form.reset();
         return ;
      }
   }
   this.tabll.push({
    tabel,
       type,
       capacity
   });
   this.form.reset();
   console.log(this.tabll);
  

  }
  else
  {
    this.tabll.push({
      tabel,
       type,
       capacity
     });
     this.form.reset();
     this.l = 1;
    console.log(this.tabll);
  }
     
}
    
async addNew() {
 
  let owner;
   const ownerId =  await this.authService. getTokenFromStorage();
   const decoded = jwt_decode(ownerId );
   try{
     const decoded = jwt_decode(ownerId );
     owner = decoded['data']._id;
   }
   catch(ex){
   }
   
 let obj = {};
   obj['resturantid'] = this.id;
   obj['Ta'] = this.tabll;
   obj['ownerid'] = owner;
   const observable = await this.booksService.addtable(
     obj
   );
   observable.subscribe(
     async data => {
       console.log('got response from server', data);
       console.log(data);
       this.loading = false;
       this.form.reset();
       this.router.navigate(['/getresturant']);
       //optional

     },
     error => {
       this.loading = false;
       console.log('error', error);
     }
   );
 }


 async update() {
       this.tab = [];
       console.log(this.showtable);
       let tabel = this.form.value.tableno;
       for(let jj = 0; jj<this.showtable.length; jj++)
     {
      if(this.showtable[jj].tabel == tabel )
      {
         window.alert('Table alraedy Added please add another');
         this.form.reset();
         return ;
      }
   }
      
     if(!Number(tabel))
    {
      window.alert('sorry,put number type');
        return ;
    }
     let  type = this.form.value.type;
     let capacity = this.form.value.capacity;
     this.tab.push({
       tabel,
       type,
       capacity
      }); 
      this.form.reset();
     
     console.log(this.tab);

   
 let ob = {};
   ob['Availabletime'] = this.tab;
   ob['_id'] = this.TABLE;
   const observable = await this.booksService.updatetable(
     ob
   );
   observable.subscribe(
     async data => {
       console.log('got response from server', data);
       console.log(data);
       this.loading = false;
       this.form.reset();
       this.gettable();
       //optional

     },
     error => {
       this.loading = false;
       console.log('error', error);
     }
   );

  

 }

 Edit(data,i)

 { 
        console.log(data.tabel);
        console.log(data.type);
        console.log(data.capacity);

        this.form.patchValue({tableno: data.tabel});
        this.form.patchValue({type: data.type});
        this.form.patchValue({capacity: data.capacity});
 }
  async edit()
{
  let t  = this.form.value.tableno;
  let ty = this.form.value.type;
  let c = this.form.value. capacity;
 
  
  let ob = {};
  ob['tabel'] = t;
  ob['type'] = ty;
  ob['capacity'] = c;
 
  console.log(ob);
  let owner;
      const ownerId =  await this.authService. getTokenFromStorage();
      try{
        const decoded = jwt_decode(ownerId );
        owner = decoded['data']._id;
      }
      catch(ex){
      }
      
        ob['_id'] = this.TABLE;
        
      const observable = await this.booksService.edittable(
        ob
      );
  
      observable.subscribe(
        async data => {
          console.log('got response from server', data);
  
          this.loading = false;
          this.form.reset();
          this.gettable();
          //optional
  
         // this.modalCtrl.dismiss();
        },
        error => {
          this.loading = false;
          console.log('error', error);
        }
      );
}

 save() {
  this.loading = true;
    this.addNew();
  
}



async delete(data,i) {
  console.log(data);
  console.log(i);
  this.index = i;
  let ob = {};
  ob['_id'] = this.TABLE;
  ob['tabel'] = data.tabel;
  ob['type'] = data.type;
  ob['capacity'] = data.capacity;
  const alert = await this.alertController.create({
    header: 'Confirm!',
    message: `Are you sure you want to delete the table "${data.tabel}"`,
    buttons: [
      {
        text: 'Cancel',
        role: 'cancel',
        cssClass: 'secondary',
        handler: blah => {
          console.log('Confirm Cancel: blah');
        }
      },
      {
        text: 'Okay',
        handler: () => {
          this.deletetable(ob);
        }
      }
    ]
  });
  await alert.present();
}

async deletetable(ob) {
  const observable = await this.booksService.deletetable(
    ob);

  observable.subscribe(
    data => {
      console.log('got response from server', data);
      window.alert('Delete successfully');
      this.gettable();
      this.deleteLoading = false;
      
    },
    error => {
      this.deleteLoading = false;
      console.log('error', error);
    }
  );
 
}
  
 del(data,i)
 {
  console.log(data);
  console.log(i);
  let tbb = data.tabel;
  console.log(this.tabll.length);
  for(let k = 0; k<this.tabll.length; k++)
     {
          if(this.tabll[k].tabel == tbb)
          {
            this.tabll.splice(k, 1);
          }

     }
     console.log(this.tabll);
 }
}

