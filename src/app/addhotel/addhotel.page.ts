
import {AuthService} from '../sdk/core/auth.service';
import {Input, ElementRef, ViewChild} from '@angular/core/';
import {ToastController, ModalController, Platform} from '@ionic/angular';
import {FormBuilder} from '@angular/forms/';
import {Router, ActivatedRoute} from '@angular/router/';
import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators } from '@angular/forms';
import { BooksService } from '../sdk/custom/books.service';
import { PlaceLocation } from './location.model';
import * as jwt_decode from 'jwt-decode';
import { __param } from 'tslib';
import { File } from '@ionic-native/file/ngx';
import { toBase64String } from '@angular/compiler/src/output/source_map';
import { HttpClient } from '@angular/common/http';
import { UserService } from '../sdk/custom/user.service';
import { async } from 'q';

@Component({
  selector: 'app-addhotel',
  templateUrl: './addhotel.page.html',
  styleUrls: ['./addhotel.page.scss'],
})
export class AddhotelPage implements OnInit {

  @ViewChild('fileInput', {static: false}) fileInput: ElementRef;
  images: any;
usePicker = false;
multipleImages = [];
  iddd: any;
  flatid: any;
  flatcity: any;
  url: any;
  room: any;
  new: any;
  obj :any;
  roomtype:any;
  roomno:any;
  cateogory: any;
  constructor(private formBuilder: FormBuilder,private router: Router,private route: ActivatedRoute,private authService: AuthService,private modalCtrl: ModalController,
    private toastController: ToastController,
    private booksService: BooksService, private file: File,private platform: Platform,private http: HttpClient,
    private userService:UserService) 
    {

    }
   
    
    
    


  
    selectMultipleImage(event){
      if (event.target.files.length > 0) {
        this.multipleImages = event.target.files;
      }
    }
    
    onMultipleSubmit(){
      const formData = new FormData();
      for(let img of this.multipleImages){
        console.log(img);
        formData.append('files', img);
      
      }
     
      this.http.post<any>('http://localhost:3000/upload', formData).subscribe(
        
        (data) =>{
          console.log(data);
          this.url = data.array;
          console.log(this.url);
          this.form.patchValue({url : this.url});
        
        },
        
        (err) => console.log(err)
      );
    }
    

  form: FormGroup;
  data:any;
  loading = false;
  
  @Input() hotel;
  ngOnInit() {
    this.formInitializer();
    this.route.queryParams.subscribe((params)=>{
    console.log(params);
    this.data = JSON.parse(params.data);
    if (this.data) {
      console.log('got hotel', this.data);
      
      this.form.patchValue(this.data);
    }
    })
  }
  formInitializer() {
    
    this.form = this.formBuilder.group({
      _id: [null],
      name : [null, [Validators.required]],
      city: [null, [Validators.required]],
     number: [null, [Validators.required]],
      Location :  [null, [Validators.required]],
      url:  [null, [Validators.required]]
      });
  }
  onLocationPicked(location: PlaceLocation)
  {
    console.log(location);
      this.form.patchValue({Location : location.address});
      //this.form.patchValue({Lat : location.lat});
      // this.form.patchValue({Lng : location.lng});
       
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
    const obj =  this.form.value;
    
    obj['owner'] = owner;
    const observable = await this.booksService.addNewHotel(
      obj
    );
    observable.subscribe(
      async data => {
        console.log('got response from server', data);
       
        const name = this.form.controls['name'].value;
        const toast = await this.toastController.create({
          message: `${name} has been added successfully.`,
          duration: 3500
        });
        toast.present();
        this.loading = false;
        this.form.reset();
        //optional

      },
      error => {
        this.loading = false;
        console.log('error', error);
      }
    );
  }
  
  async updateBook() {
    const observable = await this.booksService.updatehotel(
      this.form.value
    );

    observable.subscribe(
      async data => {
        console.log('got response from server', data);
        const name = this.form.controls['name'].value;
        //this.authService.saveTokenToStorage(data.token);
        const toast = await this.toastController.create({
          message: `${name} has been updated successfully.`,
          duration: 3500
        });
        toast.present();
        this.loading = false;
        this.form.reset();
        //optional

        this.modalCtrl.dismiss();
      },
      error => {
        this.loading = false;
        console.log('error', error);
      }
    );
  }
  

  save() {
    this.loading = true;
    
    if (this.data) {
      this.updateBook();
    }
     else 
    {
      this.addNew();
    }
  }

  // dismiss() {
  //   this.modalCtrl.dismiss({
  //     dismissed: true
  //   });
  // }


}
