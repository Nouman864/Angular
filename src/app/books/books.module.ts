import {ReactiveFormsModule} from '@angular/forms';
import { BooksPage } from './books.page';
import { BooksPageRoutingModule } from './books-routing.module';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';

@NgModule({
  imports: [CommonModule,FormsModule, IonicModule,ReactiveFormsModule, BooksPageRoutingModule],
  declarations: [BooksPage]
  
})
export class BooksPageModule {}
