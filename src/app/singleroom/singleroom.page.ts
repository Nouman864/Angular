import { Component, OnInit } from '@angular/core';
import { BooksService } from '../sdk/custom/books.service';
import { ToastController, PopoverController, Platform, ModalController } from '@ionic/angular';
import { FormBuilder } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthService } from '../sdk/core/auth.service';

@Component({
  selector: 'app-singleroom',
  templateUrl: './singleroom.page.html',
  styleUrls: ['./singleroom.page.scss'],
})
export class SingleroomPage implements OnInit {
  romno: any;
  rm: any;
  array: any[];

  constructor(private formBuilder: FormBuilder,private router: Router,private route: ActivatedRoute,private authService: AuthService,private modalCtrl: ModalController,
    private toastController: ToastController,private popoverController: PopoverController,
    private booksService: BooksService,private platform: Platform) 
    {

    }

  ngOnInit() {
    this.route.queryParams.subscribe((params)=>{
      //console.log(params);
      this.rm = JSON.parse(params.data);
        console.log('got rooms', this.rm);
        this.romno =this.rm['roomno'];
        console.log(this.romno);
        
      
         //console.log(this.data);
      
      })

  }






  booked()

  {
  
    this. array =[];
    for (var i = 0; i < this.romno.length ; i++)
    {
      if(this.romno[i].checked === true)
      {
       this. array.push(
        this.romno[i]
        )
      }
    }
    console.log(this.array);
   
  }


  
}
