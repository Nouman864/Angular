import { Component, OnInit, Input } from '@angular/core';
import { Validators, FormGroup, FormBuilder } from '@angular/forms';
import { BooksService } from '../sdk/custom/books.service';
import { Platform, ToastController, ModalController, PopoverController } from '@ionic/angular';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthService } from '../sdk/core/auth.service';
import { RatingComponent } from './rating/rating.component';

@Component({
  selector: 'app-viewproperty',
  templateUrl: './viewproperty.page.html',
  styleUrls: ['./viewproperty.page.scss'],
})
export class ViewpropertyPage implements OnInit {
  rtid: Event;
  irt: any;

  constructor(private formBuilder: FormBuilder,private router: Router,private route: ActivatedRoute,private authService: AuthService,private modalCtrl: ModalController,
    private toastController: ToastController,private popoverController: PopoverController,
    private booksService: BooksService,private platform: Platform) 
    {

    }
      


  form: FormGroup;
  data:any;
  loading = false;
  images:any;
  @Input() flat;
  ngOnInit() {
    this.formInitializer();
    this.route.queryParams.subscribe((params)=>{
    console.log(params);
    this.data = JSON.parse(params.data);
    if (this.data) {
      console.log('got flat', this.data);
      this.form.patchValue(this.data);
      
    }
       this.irt = this.data.owner;
       console.log(this.data);
    
    })
  
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
  




 async Review(event:Event)
  {
       const review = await this.popoverController.create({
       component: RatingComponent,
       componentProps: { event }
       });
       review.onDidDismiss().then(data => {
      
        
      });
      await review.present();
     
  }
 
}
