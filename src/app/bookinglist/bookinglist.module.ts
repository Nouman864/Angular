import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BookinglistPageRoutingModule } from './bookinglist-routing.module';

import { BookinglistPage } from './bookinglist.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    BookinglistPageRoutingModule
  ],
  declarations: [BookinglistPage]
})
export class BookinglistPageModule {}
