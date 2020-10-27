import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ResturantprofilePageRoutingModule } from './resturantprofile-routing.module';

import { ResturantprofilePage } from './resturantprofile.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    ResturantprofilePageRoutingModule
  ],
  declarations: [ResturantprofilePage]
})
export class ResturantprofilePageModule {}
