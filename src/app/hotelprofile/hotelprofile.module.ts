import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HotelprofilePageRoutingModule } from './hotelprofile-routing.module';

import { HotelprofilePage } from './hotelprofile.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    HotelprofilePageRoutingModule
  ],
  declarations: [HotelprofilePage]
})
export class HotelprofilePageModule {}
