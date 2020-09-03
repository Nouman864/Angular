import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthService } from '../sdk/core/auth.service';
import { ModalController, ToastController, PopoverController, Platform } from '@ionic/angular';
import { BooksService } from '../sdk/custom/books.service';
import { RatingComponent } from '../viewproperty/rating/rating.component';
import { RatingresturantComponent } from './ratingresturant/ratingresturant.component';

@Component({
  selector: 'app-viewresturant',
  templateUrl: './viewresturant.page.html',
  styleUrls: ['./viewresturant.page.scss'],
})
export class ViewresturantPage implements OnInit {

  rtid: Event;
  irt: any;
  dataa: Event;

  constructor(private formBuilder: FormBuilder,private router: Router,private route: ActivatedRoute,private authService: AuthService,private modalCtrl: ModalController,
    private toastController: ToastController,private popoverController: PopoverController,
    private booksService: BooksService,private platform: Platform) 
    {

    }
      


  form: FormGroup;
  data:any;
  loading = false;
  images:any;
  ngOnInit() {
    this.formInitializer();
    this.route.queryParams.subscribe((params)=>{
    console.log(params);
    this.data = JSON.parse(params.data);
    if (this.data) {
      console.log('got ', this.data);
      this.form.patchValue(this.data);
      
    }
       this.irt = this.data._id;
       console.log(this.irt);
    
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
       component: RatingresturantComponent,
       componentProps: { event }
       });
       review.onDidDismiss().then(data => {
      
        
      });
      await review.present();
     
  }
  menu(event:Event)
  {
    this.dataa = event;
    console.log(this.dataa);
    this.router.navigate(['/showmenu'],{
        queryParams:{data:JSON.stringify(this.dataa)}
    });
  }
 
}