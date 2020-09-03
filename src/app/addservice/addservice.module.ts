import {ReactiveFormsModule} from '@angular/forms/';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddservicePageRoutingModule } from './addservice-routing.module';

import { AddservicePage } from './addservice.page';
import { SharedModule } from '../shared/shared.module';
//import {  BooksModule } from '../books/books.module';
import { BooksPageRoutingModule } from '../books/books-routing.module';
import { BooksPageModule } from '../books/books.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    SharedModule,
    AddservicePageRoutingModule
  ],
  declarations: [AddservicePage]
  
})
export class AddservicePageModule {}
