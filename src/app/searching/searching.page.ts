import { Component, OnInit, Renderer2, ElementRef, ViewChild, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { UserService } from '../sdk/custom/user.service';
import { Router } from '@angular/router';
import { BooksService } from '../sdk/custom/books.service';

@Component({
  selector: 'app-searching',
  templateUrl: './searching.page.html',
  styleUrls: ['./searching.page.scss'],
})
export class SearchingPage implements OnInit {
  @Input() flat : Flats;
  flats: Flats[] = [];
  filteredFlats = [];
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

    const observable = await this.booksService.getAllBooks();
    observable.subscribe(
      data => {
        this.flats = data.data.docs;
        this.flats = this.flats.filter(function (e)
         {
           return e.city != '';
          
        });
        this.loading = false;

        console.log(this.flats );
        
      },
      err => {
        console.log('err', err);
      }
    );
    
  }
  
    
   
  
  
 
initializeItems(){
  this.filteredFlats= Object.assign([], this.flats );
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
      this.filteredFlats = Object.assign([], this.flats ).filter(
        flat =>  flat.city.toLowerCase().indexOf(value.toLowerCase()) > -1
              )
    }
    
    if(this.loc === "name")
    {
      this.filteredFlats = Object.assign([], this.flats ).filter(
        flat =>  flat.name.toLowerCase().indexOf(value.toLowerCase()) > -1 )

   }
   if(this.loc === "location")
    {
      this.filteredFlats = Object.assign([], this.flats ).filter(
        flat =>  flat.Location.toLowerCase().indexOf(value.toLowerCase()) > -1
              )

   }
 
 
}

openEditPopup(event:Event) {
  
    this.dataa = event;
    console.log(this.dataa);
    this.router.navigate(['/viewproperty'],{
        queryParams:{data:JSON.stringify(this.dataa)}
    });
}
  
}


interface Flats {
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





























































































  
