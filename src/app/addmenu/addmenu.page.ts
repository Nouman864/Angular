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
  selector: 'app-addmenu',
  templateUrl: './addmenu.page.html',
  styleUrls: ['./addmenu.page.scss'],
})
export class AddmenuPage implements OnInit {

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
  brk: any;
  lan: any;
  dinn: any;
  dataaa: any;
  deleteLoading: boolean;
  index: any;
  mnu: any;
  idd: any;
  
  constructor(private formBuilder: FormBuilder,private router: Router,private route: ActivatedRoute,private authService: AuthService,private modalCtrl: ModalController,
    private booksService: BooksService,private alertController: AlertController, private toastController: ToastController, private file: File,private platform: Platform,private http: HttpClient,
    private userService:UserService) 
     {
}

form: FormGroup;
ionViewWillEnter() {
  this. ngOnInit();
}
ngOnInit() {
this.formInitializer();
this.route.queryParams.subscribe((params)=>{
  console.log(params);
  this.idd = JSON.parse(params.data);
    console.log(this.idd);
  
  });
  this.getmenu();
}

formInitializer() {
this.form = this.formBuilder.group({

  tableno:[null,[Validators.minLength(1), Validators.pattern(/^[0-9]\d*$/)]],
  type : [null, [Validators.required]],
  capacity : [null, [Validators.required]],
  dish : [null, [Validators.required, Validators.minLength(1),Validators.pattern('^[a-zA-Z ]*$')]],
  price: [null, [Validators.required,Validators.pattern(/^[0-9]\d*$/)]]
  
});



 
}

table()
{  


  this.router.navigate(['/addtable'],{
    queryParams:{data:JSON.stringify(this.idd )}
});

}

///////////////////get MENU.////////////////////////////////


async getmenu() {
  this.loading = true;
  let owner1 = this.idd;
  const ownerId =  await this.authService. getTokenFromStorage();
  console.log(ownerId);
  try{
    const decoded = jwt_decode(ownerId );
   let owner = decoded['data']._id;
  }
  catch(ex){
  }
  console.log(owner1);
  const observable = await this.booksService.getmenu(
    owner1
  );
  observable.subscribe(
    data => {
      this.menus = data.data;
      this.loading = false;
      console.log( data);
      if(data.data.length > 0)
      {

           let z = '1';
           console.log(z);
       console.log(data.data[0]._id);
      this.MENU = data.data[0]._id;
      this.brk = data.data[0].breakfast;
      this.lan = data.data[0].launch;
      this.dinn = data.data[0].dinner;
      }
      else
      {
         let z = '0';
      }
    }, 
    err => {
      console.log('err', err);
    } 
  );
}

add()
{
  if(!this.menutype)
  {
    window.alert('Please above select menu ');
    return;
  }


  ///// BREAK FAST//////////////////
  if(this.menutype ==  "breakfast")
  {
    let dish = this.form.value.dish;
    if(Number(dish))
    {
      window.alert('sorry,put String ');
        return ;
    }
    let price = this.form.value.price;
    if(!Number(price))
    {
      window.alert('sorry,put number type');
        return ;
    }
    if(this.fast = 1)
    {
    console.log(this.breakfast);
    for(let j = 0; j<this.breakfast.length; j++)
    {
     if(this.breakfast[j].dish == dish )
     {
        window.alert('alraedy Added please add another');
        this.form.reset();
        return ;
     }
    }
  }
   this.breakfast.push({
     dish,
     price,
     menu:this.menutype,
     id:'abs'
    });
   this.form.reset();
   this.fast = 1;
   console.log(this.breakfast);
 }




//////////////////// LAUNCH//////////////////////////
 if(this.menutype ==  "launch")
  {
    let dish = this.form.value.dish;
    if(Number(dish))
    {
      window.alert('sorry,put String ');
        return ;
    }
    let price = this.form.value.price;
    if(!Number(price))
    {
      window.alert('sorry,put number type');
        return ;
    }
    if(this.lauch = 1)
    {
    console.log(this.launch);
    for(let j = 0; j<this.launch.length; j++)
    {
     if(this.launch[j].dish == dish )
     {
        window.alert('alraedy Added please add another');
        this.form.reset();
        return ;
     }
    }
   }
   this.launch.push({
    dish,
    price,
    menu:this.menutype,
    id:'abs'
   });
   this.form.reset();
   this.lauch = 1;
console.log(this.launch);
 }



///////////////// DINNER////////////////////////
 if(this.menutype ==  "dinner")
  {
    let dish = this.form.value.dish;
    if(Number(dish))
    {
      window.alert('sorry,put String ');
        return ;
    }
    let price = this.form.value.price;
    if(!Number(price))
    {
      window.alert('sorry,put number type');
        return ;
    }
    if(this.dinnr = 1)
    {
    console.log(this.dinner);
    for(let j = 0; j<this.dinner.length; j++)
    {
     if(this.dinner[j].dish == dish )
     {
        window.alert(' dish alraedy Added please add another');
        this.form.reset();
        return ;
     }
    }
  }
   this.dinner.push({

    dish,
    price,
    menu:this.menutype,
    id:'abs'
   });
   this.form.reset();
   this.dinnr = 1;
console.log(this.dinner);
 }


}


 
async addNew() {
 
  if(!this.breakfast.length)
  {
    window.alert('please add breakfast');
    return 0 ;
  }
  if(!this.launch.length)
  {
    window.alert('please add launch');
    return 0 ;
  }
  if(!this.dinner.length)
  {
    window.alert('please add dinner');
    return 0 ;
  }

  this.time = [];
     let br = {};
      let breakfast = this.breakfast;
     let lan = {};
     let launch = this.launch;
     let dinn = {};
     let dinner = this.dinner;
     this.time.push({
        breakfast,
         launch,
          dinner
     })

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
   obj['resturantid'] = this.idd;
   obj['breakfast']  = breakfast;
   obj['launch']  = launch;
   obj['dinner']  = dinner;
  //  obj['Ta'] = this.tabll;
   obj['ownerid'] = owner;
   const observable = await this.booksService.addmenu(
     obj
   );
   observable.subscribe(
     async data => {
       console.log('got response from server', data);
       console.log(data);
       this.loading = false;
       this.form.reset();
       this.router.navigate(['/addtable'],{
        queryParams:{data:JSON.stringify(this.idd )}
    });

     },
     error => {
       this.loading = false;
       console.log('error', error);
     }
   );
 }


 async update() {
       this.tab = [];
       if(!this.menutype)
  {
    window.alert('Please above select menu ');
    return;
  }
    
     let dish = this.form.value.dish;
     if(!String(dish))
    {
      window.alert('sorry,put String');
        return ;
    }
     let price = this.form.value.price;
    if(!Number(price))
    {
      window.alert('sorry,put number type');
        return ;
    }
     console.log(this.brk);
      console.log(this.lan);
      console.log(this.dinn);
      let menutype =  this.menutype;
      console.log(menutype);
      if(menutype == 'breakfast')
      {
      for(let jj = 0; jj<this.brk.length; jj++)
    {
     if(this.brk[jj].dish == dish )
     {
        window.alert(' dish alraedy Added please add another');
        this.form.reset();
        return ;
     }
    }
     this.tab.push({
      
       dish,
       price,
       menutype,
       id:'bb'
      }); 
      this.form.reset();
     console.log(this.tab);
    }
    if(menutype == 'launch')
      {
      for(let ll = 0; ll<this.lan.length; ll++)
    {
     if(this.lan[ll].dish == dish )
     {
        window.alert(' dish alraedy Added please add another');
        this.form.reset();
        return ;
     }
    }
     this.tab.push({
      
       dish,
       price,
       menutype,
       id:'bb'
      }); 
      this.form.reset();
     console.log(this.tab);
    }
    if(menutype == 'dinner')
      {
      for(let kk = 0; kk<this.dinn.length; kk++)
    {
     if(this.dinn[kk].dish == dish )
     {
        window.alert(' dish alraedy Added please add another');
        this.form.reset();
        return ;
     }
    }
     this.tab.push({
      
       dish,
       price,
       menutype,
       id:'bb'
      }); 
      this.form.reset();
     console.log(this.tab);
    }

   
 let ob = {};
   ob['Availabletime'] = this.tab;
   ob['_id'] = this.MENU;
   const observable = await this.booksService.updatemenu(
     ob
   );
   observable.subscribe(
     async data => {
       console.log('got response from server', data);

       console.log(data);
       this.loading = false;
       this.form.reset();
       this.getmenu();
       //optional

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
  ob['_id'] = this.MENU;
  ob['dish'] = data.dish;
  ob['price'] = data.price;
  ob['time'] = data.menu;
  const alert = await this.alertController.create({
    header: 'Confirm!',
    message: `Are you sure you want to delete the dish "${data.dish}"`,
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
          this.deletedish(ob);
        }
      }
    ]
  });
  await alert.present();
}

async deletedish(ob) {
  const observable = await this.booksService.deletedish(
    ob);

  observable.subscribe(
    data => {
      console.log('got response from server', data);
      window.alert('Delete successfully');
      this.getmenu();
      this.deleteLoading = false;
      
    },
    error => {
      this.deleteLoading = false;
      console.log('error', error);
    }
  );
  
}



async Edit(data,i)
{
  console.log(data);
  this.mnu= data.menu;
  this.id = data.id;
  console.log(i);
  let prevdish = data.dish;
  let prevprice = data.price;
  this.form.patchValue({dish : prevdish});
  this.form.patchValue({price : prevprice});
} 





  async EDITT()
{
     
  let d  = this.form.value.dish;
  let p = this.form.value.price;
  
  console.log(this.mnu);
  let ob = {};
  ob['menu'] = this.mnu;
  ob['dish'] = d;
  ob['price'] = p;
  ob['id'] = this.id;
 
  console.log(ob);
  let owner;
      const ownerId =  await this.authService. getTokenFromStorage();
      try{
        const decoded = jwt_decode(ownerId );
        owner = decoded['data']._id;
      }
      catch(ex){
      }
      
        ob['_id'] = this.MENU;
        
      const observable = await this.booksService.editmenu(
        ob
      );
  
      observable.subscribe(
        async data => {
          console.log('got response from server', data);
  
        
          this.getmenu();
          this.form.reset();
          
          //optional
  
         // this.modalCtrl.dismiss();
        },
        error => {
          this.loading = false;
          console.log('error', error);
        }
      );
}





del(data,i)
 {
  console.log(data);
  console.log(i);
  console.log(this.breakfast.length);
  const  men = String (data.menu);

 let dih = String (data.dish);
       if(men == "breakfast")
       {
        
            for(let k = 0; k <this.breakfast.length; k++)
       {
          if(this.breakfast[k].dish == dih)
          {
            this.breakfast.splice(k, 1);
          }

        }
     console.log(this.breakfast);
       }
       if(men == "launch")
       {
        
            for(let k = 0; k <this.launch.length; k++)
       {
          if(this.launch[k].dish == dih)
          {
            this.launch.splice(k, 1);
          }

        }
     console.log(this.launch);
       }
       if(men == "dinner")
       {
        
            for(let k = 0; k <this.dinner.length; k++)
       {
          if(this.dinner[k].dish == dih)
          {
            this.dinner.splice(k, 1);
          }

        }
     console.log(this.dinner);
       }
  
 }
}
