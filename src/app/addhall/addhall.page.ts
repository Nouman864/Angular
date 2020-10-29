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
import { ThrowStmt } from '@angular/compiler';
@Component({
  selector: 'app-addhall',
  templateUrl: './addhall.page.html',
  styleUrls: ['./addhall.page.scss'],
})
export class AddhallPage implements OnInit {

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
  imag: any;
  id: any;
  hotelid: any;
  idd: any;
  rom: Event;
  hallid: any;
  constructor(private formBuilder: FormBuilder,private router: Router,private route: ActivatedRoute,private authService: AuthService,private modalCtrl: ModalController,
    private toastController: ToastController,
    private booksService: BooksService, private file: File,private platform: Platform,private http: HttpClient,
    private userService:UserService) 
    {

    }
   

    selectMultipleImage(event)
    {
      if (event.target.files.length > 0) 
      {
        this.multipleImages = event.target.files;
      }

 

    }
    
    onMultipleSubmit(){
      const formData = new FormData();
      for(let img of this.multipleImages){
        console.log(img);
        formData.append('files', img);
      
      }
     
      this.http.post<any>('http://localhost:3000/hotelimage', formData).subscribe(
        
        async (data) =>{
          console.log(data);
         this.imag =  data['image'];
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
  
  @Input() hotel;
  ionViewWillEnter() {
    this. ngOnInit();
}
  ngOnInit() {
    this.formInitializer();
    this.route.queryParams.subscribe((params)=>{
    console.log(params);
    this.data = JSON.parse(params.data);
    if (this.data) {
      console.log('got hall', this.data);
    
    //  this.value = this.data.reviewsTotal;
     this.form.patchValue({name : this.data.name});
     this.form.patchValue({city : this.data.city});
     this.form.patchValue({number : this.data.number});
     this.form.patchValue({Location : this.data.Location});
     this.form.patchValue({check: this.data.check});
     this.form.patchValue({email: this.data.email});
     this.form.patchValue({charges: this.data.charges});
      
      this.id = this.data._id;
      this.imag = this.data.images; 
    }
    })
  }
  formInitializer() {
    this.form = this.formBuilder.group({
      name : [null, [Validators.required,Validators.pattern('^[a-zA-Z ]*$')]],
      city: [null, [Validators.required]],
      email: [null, [Validators.required,Validators.email]],
     number: [null, [Validators.required, Validators.minLength(11),Validators.pattern(/^[0-9]\d*$/)]],
     charges: [null, [Validators.required, Validators.minLength(1),Validators.pattern(/^[0-9]\d*$/)]],
      Location: [null, [Validators.required]],
      // facility: [null, [Validators.required,  Validators.pattern('^[a-zA-Z ]*$')]],
      images: [null, [Validators.required]],
      check:  [null, [Validators.required]]
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

 

  updateroom(event:Event)
  {
    this.rom = event;
  this.router.navigate(['/addroom'],{
      queryParams:{data:JSON.stringify(this.rom)}
  });
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
    obj['images'] =  this.imag;
    const observable = await this.booksService.addNewmarriage(
      obj
    );
    observable.subscribe(
      async data => {
        console.log('got response from server', data);
        this.hallid = data.result._id;
        console.log(this.hotelid);
        const name = this.form.controls['name'].value;
        const toast = await this.toastController.create({
          message: `${name} has been added successfully.`,
          duration: 3500
        });
        toast.present();
        this.loading = false;
        this.form.reset();
        this.router.navigate(['/addhallmenu'],{
          queryParams:{data:JSON.stringify(this.hallid )}
      });
        //optional

      },
      error => {
        this.loading = false;
        console.log('error', error);
      }
    );
  }
  
  async updateBook() {
    const obj = this.form.value;
    obj['images'] =  this.imag;
    obj['_id'] = this.id;
    
    const observable = await this.booksService.updatehall(
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
        this.router.navigate(['/addhallmenu'],{
          queryParams:{data:JSON.stringify(this.id )}
      });

        this.modalCtrl.dismiss();
      },
      error => {
        this.loading = false;
        console.log('error', error);
      }
    );
  }
  

  // save() {
  //   this.loading = true;
    
  //   if (this.data) {
  //     this.updateBook();
  //   }
  //    else 
  //   {
  //     this.addNew();
  //   }
  // }

  // dismiss() {
  //   this.modalCtrl.dismiss({
  //     dismissed: true
  //   });
  // }

}
