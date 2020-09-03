import { Component, OnInit, Renderer2, ElementRef, ViewChild, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { UserService } from '../sdk/custom/user.service';
import { Router } from '@angular/router';
import { BooksService } from '../sdk/custom/books.service';
@Component({
  selector: 'app-hotelsearch',
  templateUrl: './hotelsearch.page.html',
  styleUrls: ['./hotelsearch.page.scss'],
})
export class HotelsearchPage implements OnInit {
  @Input() hotel : Hotels;
  hotels: Hotels[];
  filteredHotels = [];
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

  constructor(
    private modalCtrl: ModalController,private userService:UserService,private router: Router, private booksService :BooksService,
    private renderer: Renderer2
  ) {}

  ngOnInit() {
    this.getAll();
    
  }

   
  async getAll() {
    this.loading = true;

    const observable = await this.booksService.getAllHotels();
    observable.subscribe(
      data => {
        this.hotels = data.data.docs;
        // this.hotels = this.flats.filter(function (e)
        //  {
        //    return e.city != '';
          
        // });
        this.loading = false;

        console.log(this.hotels );
        
      },
      err => {
        console.log('err', err);
      }
    );
    
  }
  
    
   
  
  
 
initializeItems(){
  this.filteredHotels= Object.assign([], this.hotels );
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
      this.filteredHotels = Object.assign([], this.hotels ).filter(
        hotel =>  hotel.city.toLowerCase().indexOf(value.toLowerCase()) > -1
              )
    }
    
    if(this.loc === "name")
    {
      this.filteredHotels = Object.assign([], this.hotels).filter(
        hotel =>  hotel.name.toLowerCase().indexOf(value.toLowerCase()) > -1 )

   }
   if(this.loc === "location")
    {
      this.filteredHotels = Object.assign([], this.hotels ).filter(
        hotel =>  hotel.Location.toLowerCase().indexOf(value.toLowerCase()) > -1
              )

   }
 
 
}

openEditPopup(event:Event) {
  
    this.dataa = event;
    console.log(this.dataa);
    this.router.navigate(['/viewhotel'],{
        queryParams:{data:JSON.stringify(this.dataa)}
    });
}
  
}


interface Hotels {
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


