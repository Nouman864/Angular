import {ActivatedRoute} from '@angular/router';
import {FormGroup, FormBuilder, Validators} from '@angular/forms';
import {AlertController,ModalController} from '@ionic/angular';
import { Component, OnInit, Input } from '@angular/core';
import { BooksService } from '../sdk/custom/books.service';
import { AuthService } from '../sdk/core/auth.service';
import * as jwt_decode from 'jwt-decode';
import { Router } from '@angular/router';
import { DataService } from '../sdk/custom/data.services';
@Component({
  selector: 'app-hallbooking',
  templateUrl: './hallbooking.page.html',
  styleUrls: ['./hallbooking.page.scss'],
})
export class HallbookingPage implements OnInit {
  data: any;
  value: string;
  total: number;
  loading: boolean;
  halls: any;

  constructor(private booksService: BooksService,private dataService:DataService, private router: Router,private route: ActivatedRoute,private authService: AuthService, private formBuilder: FormBuilder,private modalController: ModalController,private alertController: AlertController) {}
  
  form: FormGroup;
  async ngOnInit() 
  {
    this.formInitializer();
    this.data;
    await this.dataService.gethalmenu().then((val)=>
    {
     this.data = val;
    });

    console.log(this.data);
  }
  
 
  formInitializer() 
  {
    
    this.form = this.formBuilder.group({
    
      name : [null, [Validators.required, Validators.minLength(1),Validators.pattern('^[a-zA-Z ]*$')]],
      guest:  [null, [Validators.required, Validators.minLength(1),Validators.pattern(/^[0-9]\d*$/)]],
      number: [null, [Validators.required, Validators.minLength(11),Validators.pattern(/^[0-9]\d*$/)]],
      type :  [null, [Validators.required]],
      date: [null, [Validators.required]],
      total: [null, [Validators.required]]
    
      });
  }


men()
{ 
      console.log(this.form.value.type);
      if(this.form.value.type == 'menu1')
      {
           this.total = this.data.menu1 * this.form.value.guest;
           this.form.patchValue({total: this.total});
      }
      if(this.form.value.type == 'menu2')
      {
        this.total = this.data.menu2 * this.form.value.guest;
        this.form.patchValue({total :this.total});
      }
}


  async book()
{
   console.log(this.data);
   let ob = this.form.value;
   ob['ownerhall'] = this.data.owner;
   ob['email'] = this.data.email;
   ob['Hallname'] = this.data.hallname;
   ob['halid'] = this.data.halid;
   this.loading = true;

    let owner;
    const ownerId =  await this.authService. getTokenFromStorage();
    try{
      const decoded = jwt_decode(ownerId );
      owner = decoded['data']._id;
    }
    catch(ex){
    }
    
    const observable = await this.booksService.bookhall(
      ob
    );
    observable.subscribe(
      data => {
        this.halls = data.data;
        this.loading = false;
      console.log(this.halls);
        
        
    
      }, 
      err => {
        console.log('err', err);
      } 
    );
}

}
