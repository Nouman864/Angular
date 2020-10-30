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

function base64toBlob(base64Data, contentType) {
  contentType = contentType || '';
  const sliceSize = 1024;
  const byteCharacters = window.atob(base64Data);
  const bytesLength = byteCharacters.length;
  const slicesCount = Math.ceil(bytesLength / sliceSize);
  const byteArrays = new Array(slicesCount);

  for (let sliceIndex = 0; sliceIndex < slicesCount; ++sliceIndex) {
    const begin = sliceIndex * sliceSize;
    const end = Math.min(begin + sliceSize, bytesLength);

    const bytes = new Array(end - begin);
    for (let offset = begin, i = 0; offset < end; ++i, ++offset) {
      bytes[i] = byteCharacters[offset].charCodeAt(0);
    }
    byteArrays[sliceIndex] = new Uint8Array(bytes);
  }
  return new Blob(byteArrays, { type: contentType });
}
@Component({
  selector: 'app-addservice',
  templateUrl: './addservice.page.html',
  styleUrls: ['./addservice.page.scss'],
})
export class AddservicePage implements OnInit {
  //@ViewChild('filePicker', {static: false}) filePickerRef: ElementRef;
  @ViewChild('fileInput', {static: false}) fileInput: ElementRef;
  images: any;
usePicker = false;
multipleImages = [];
  iddd: any;
  flatid: any;
  flatcity: any;
  url: any;
  img = [];
secure_url:any;
  tableno: any;
  rom: [];
  tabll =[];
  tabl: any;
  arrayy: any;
  order = new Array();
  id: any;
  faci: any;

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
    //  console.log(this.flatid);
      for(let img of this.multipleImages){
        console.log(img);
        formData.append('files', img);
        // formData.append('ID', this.flatid);
      }
     
      this.http.post( 'https://rehayash.herokuapp.com/upload_images', formData).subscribe(
        
        async (data) =>{
          console.log(data);
          this.img = (data['image']);
        
      
        if(data)
        {
          const toast = await this.toastController.create({
            message: `${name} Image has been added successfully.`,
            duration: 3500
          });
          toast.present();
        }
          
        },
        
        (err) => console.log(err)
      );
      
    }
    
    

  form: FormGroup;
  data:any;
  loading = false;
  
  @Input() flat;
  ngOnInit() {
    this.formInitializer();
    this.route.queryParams.subscribe((params)=>{
      if(params.data)
      {
        this.data = JSON.parse(params.data);
      }
   
    if (this.data) {
      console.log('got flat', this.data);
      this.form.patchValue(this.data);
      this.id = this.data._id;
      this.form.patchValue({name : this.data.name});
      this.form.patchValue({city : this.data.city});
      this.form.patchValue({number : this.data.number});
      this.form.patchValue({Location : this.data.Location});
      this.form.patchValue({check: this.data.check});
      this.form.patchValue({about: this.data.about});
      this.form.patchValue({rooms: this.data.rooms});
      this.form.patchValue({email: this.data.email});
          this.img = this.data.image;
    }
    })
  
    console.log('Mobile:', this.platform.is('mobile'));
    console.log('Hybrid:', this.platform.is('hybrid'));
    console.log('iOS:', this.platform.is('ios'));
    console.log('Android:', this.platform.is('android'));
    console.log('Desktop:', this.platform.is('desktop'));
    if((this.platform.is('mobile') && !this.platform.is('hybrid')) || this.platform.is('desktop'))
    {
      this.usePicker = true;
      
    }

  }
  formInitializer() {
    
    this.form = this.formBuilder.group({
      name : [null, [Validators.required, Validators.minLength(2), Validators.pattern('^[a-zA-Z ]*$')]],
      city: [null, [Validators.required]],
      amount: [null, [Validators.required,Validators.pattern(/^[0-9]\d*$/)]],
      check: [null, [Validators.required]],
      number: [null, [Validators.required, Validators.minLength(11),Validators.pattern(/^[0-9]\d*$/)]],
      Location: [null, [Validators.required]],
      images:  [null, [Validators.required]],
      rooms:  [null, [Validators.required]],
      email: ['', [Validators.required, Validators.pattern('^[_A-Za-z0-9-\\+]+(\\.[_A-Za-z0-9-]+)*@[A-Za-z0-9-]+(\\.[A-Za-z0-9]+)*(\\.[A-Za-z]{2,})$'),Validators.email]],
      about : [null, [Validators.required, Validators.minLength(3), Validators.pattern('^[a-zA-Z ]*$')]],
      });
      
  }
  onLocationPicked(location: PlaceLocation)
  {
    console.log(location);

    let n = `${location.address}`.split(",");
          
   
          const loc =`${location.address}`. split(",")[n.length - 2];
         //const loc = location.address.slice(location.address.lastIndexOf(',') + 2);
          console.log(loc);
     this.form.patchValue({Location : location.address});
      this.form.patchValue({city : loc});
  }


  
  async addNew() {
    console.log(this.data);
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
    console.log(obj);
    obj['owner'] = owner;
    obj['image'] = this.img;
    


    const observable = await this.booksService.addNewBook(
      obj
    );
    observable.subscribe(
      async data => {
        console.log('got response from server', data);
        console.log(data);
      //  this.flatid = data;
        const name = this.form.controls['name'].value;
        const toast = await this.toastController.create({
          message: `${name} has been added successfully.`,
          duration: 3500
        });
        toast.present();
        this.loading = false;
        this.form.reset();
        this.router.navigate(['/books']);
        //optional

      },
      error => {
        this.loading = false;
        console.log('error', error);
      }
    );
  }
  
  async updateBook() {
    console.log(this.id);
   const obj =  this.form.value
    obj['_id'] = this.id;
    obj['image'] = this.img;
    const observable = await this.booksService.updateBook(
       obj
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
        this.router.navigate(['/books']);

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

