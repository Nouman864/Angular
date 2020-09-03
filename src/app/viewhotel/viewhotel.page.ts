import { Component, OnInit, Input } from '@angular/core';
import { Validators, FormGroup, FormBuilder } from '@angular/forms';
import { BooksService } from '../sdk/custom/books.service';
import { Platform, ToastController, ModalController } from '@ionic/angular';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthService } from '../sdk/core/auth.service';
@Component({
  selector: 'app-viewhotel',
  templateUrl: './viewhotel.page.html',
  styleUrls: ['./viewhotel.page.scss'],
})
export class ViewhotelPage implements OnInit {
  hotelowner: any;
  roomid: any;
  id: any;

  constructor(private formBuilder: FormBuilder,private router: Router,private route: ActivatedRoute,private authService: AuthService,private modalCtrl: ModalController,
    private toastController: ToastController,
    private booksService: BooksService,private platform: Platform) 
    {

    }
      

    dataa:any;
  form: FormGroup;
  data:any;
  //rooms : any;
  rooms: Rooms[];
  loading = false;
  images:any;
  
  ngOnInit() {
    this.formInitializer();
    this.route.queryParams.subscribe((params)=>{
    console.log(params);
    this.data = JSON.parse(params.data);
    if (this.data) {
      console.log('got hotel', this.data);
      this.hotelowner = this.data.owner;
      this.form.patchValue(this.data);
    }
    })
   this.get();
    this.images =[];
    const urll = this.data.url;
    for (var i = 0; i < urll.length; i++) {
      
 this.images[i] = `http://localhost:3000/images/${this.data.url[i]}`; 
   
    }
    
  }

  
  formInitializer() {
    
    this.form = this.formBuilder.group({
      _id: [null],
      name : [null, [Validators.required]],
      city: [null, [Validators.required]],
     number: [null, [Validators.required]],
      Location :  [null, [Validators.required]],
      image :  [null],
      });
  }

///////////////////// GET ROOM/////////////////////
  
  async get() {
    this.loading = true;
    const owner =this.hotelowner;
    const observable = await this.booksService.getroom(
      owner 
    );
    observable.subscribe(
      data => {
        this.rooms = data.data;
        this.loading = false;
        console.log('data', data);
         console.log(this.rooms);
      }, 
      err => {
        console.log('err', err);
      } 
    );
  }

  booking(event:Event) {
  
    this.dataa = event;
    console.log(this.dataa);
    this.router.navigate(['/bookroom'],{
        queryParams:{data:JSON.stringify(this.dataa)}
    });
}

}
interface Rooms {
  _id: string;
   Rooms: string; 
}