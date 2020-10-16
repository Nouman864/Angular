import { Component, OnInit, Renderer2, ElementRef, ViewChild, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { UserService } from '../sdk/custom/user.service';
import { Router } from '@angular/router';
import { BooksService } from '../sdk/custom/books.service';
import { DataService } from '../sdk/custom/data.services';
@Component({
  selector: 'app-resturantsearch',
  templateUrl: './resturantsearch.page.html',
  styleUrls: ['./resturantsearch.page.scss'],
})
export class ResturantsearchPage implements OnInit {


  resturants: Resturants[];
  clickListener: any;
  googleMaps: any;
  google: any;
  lat: any;
  lng: any;
  value:any;
  search: string;
  loading: boolean;
  items: string[];
  loc:any;
  dataa:any;
  e:any;
  filteredResturants: any[] & Resturants[];

  constructor(
    private modalCtrl: ModalController,private dataService:DataService,private userService:UserService,private router: Router, private booksService :BooksService,
    private renderer: Renderer2
  ) {}

  ngOnInit() {
    this.getAll();
    
  }

   
  async getAll() {
    this.loading = true;

    const observable = await this.booksService.getAllresturant();
    observable.subscribe(
      data => {
        this.resturants = data.data.docs;
      
        this.loading = false;

        console.log(this.resturants );
      
      },
      err => {
        console.log('err', err);
      }
    );
    
  }
  
    
   
  
  
 
initializeItems(){
  this.filteredResturants= Object.assign([], this.resturants);
}


 isname = false;
 iscity = false;
 islocation = false;
 
filterItem(value)
{
  if(!value)
  {
        this.initializeItems();
  }
   
  if(this.loc === "city")
    {
      this.filteredResturants = Object.assign([], this.resturants ).filter(
        resturant =>  resturant.city.toLowerCase().indexOf(value.toLowerCase()) > -1
              )
    }
    
    if(this.loc === "name")
    {
      this.filteredResturants = Object.assign([], this.resturants).filter(
        resturant =>  resturant.name.toLowerCase().indexOf(value.toLowerCase()) > -1 )

   }
   if(this.loc === "location")
    {
      this.filteredResturants = Object.assign([], this.resturants ).filter(
        resturant =>  resturant.Location.toLowerCase().indexOf(value.toLowerCase()) > -1
              )
   }
 
 
}

openEditPopup(event:Event) {
  
    this.dataa = event;
    console.log(this.dataa);
    this.dataService.saveresturant(this.dataa);
    this.router.navigateByUrl('/viewresturant');
}
  
}


interface Resturants {
  toLowerCase: any;
  name: string;
  city: string;
  Location: string;
  ibn: string;
  _id: string;
  image_url: string;
  author: string;
  is_deleted: boolean;
}



