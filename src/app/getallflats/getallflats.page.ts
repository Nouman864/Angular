import { Component, OnInit, Renderer2, ElementRef, ViewChild, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { UserService } from '../sdk/custom/user.service';
import { Router } from '@angular/router';
import { BooksService } from '../sdk/custom/books.service';
import { DataService } from '../sdk/custom/data.services';
@Component({
  selector: 'app-getallflats',
  templateUrl: './getallflats.page.html',
  styleUrls: ['./getallflats.page.scss'],
})
export class GetallflatsPage implements OnInit {


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
  flats: any;

  constructor(
    private modalCtrl: ModalController,private userService:UserService,private dataService:DataService,private router: Router, private booksService :BooksService,
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
        // this.flats = this.flats.filter(function (e)
        //  {
        //    return e.city != '';
          
        // });
        this.loading = false;

        console.log(this.flats );
        
      },
      err => {
        console.log('err', err);
      }
    );
    
  }
  
    
  openEditPopup(event:Event) {
  
    this.dataa = event;
    console.log(this.dataa);
    this.dataService.saveflat(this.dataa);
    this.router.navigateByUrl('/viewproperty');
}


}
