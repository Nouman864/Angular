import { Component, OnInit, Renderer2, ElementRef, ViewChild, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { UserService } from '../sdk/custom/user.service';
import { Router } from '@angular/router';
import { BooksService } from '../sdk/custom/books.service';
import { DataService } from '../sdk/custom/data.services';
@Component({
  selector: 'app-searchhall',
  templateUrl: './searchhall.page.html',
  styleUrls: ['./searchhall.page.scss'],
})
export class SearchhallPage implements OnInit {

  
  halls: Halls[];
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
  filteredHalls: any[] & Halls[];

  constructor(
    private modalCtrl: ModalController,private dataService:DataService,private userService:UserService,private router: Router, private booksService :BooksService,
    private renderer: Renderer2
  ) {}

  ngOnInit() {
  this.getAll();
    
  }

   
  async getAll() {
    this.loading = true;

    const observable = await this.booksService.getAllhalls();
    observable.subscribe(
      data => {
        this.halls = data.data.docs;
      
        this.loading = false;

        console.log(this.halls );
      
      },
      err => {
        console.log('err', err);
      }
    );
    
  }
  
    
   
  
  
 
initializeItems(){
  this.filteredHalls= Object.assign([], this.halls);
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
      this.filteredHalls = Object.assign([], this.halls ).filter(
        resturant =>  resturant.city.toLowerCase().indexOf(value.toLowerCase()) > -1
              )
    }
    
    if(this.loc === "name")
    {
      this.filteredHalls = Object.assign([], this.halls).filter(
        resturant =>  resturant.name.toLowerCase().indexOf(value.toLowerCase()) > -1 )

   }
   if(this.loc === "location")
    {
      this.filteredHalls = Object.assign([], this.halls ).filter(
        resturant =>  resturant.Location.toLowerCase().indexOf(value.toLowerCase()) > -1
              )
   }
 
 
}

openEditPopup(event:Event) {
  
    this.dataa = event;
    console.log(this.dataa);
    this.dataService.savehall(this.dataa);
    this.router.navigateByUrl('/viewhall');
}

}
interface Halls {
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