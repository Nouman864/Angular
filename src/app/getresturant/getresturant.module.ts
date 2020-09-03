import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GetresturantPageRoutingModule } from './getresturant-routing.module';

import { GetresturantPage } from './getresturant.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    GetresturantPageRoutingModule
  ],
  declarations: [GetresturantPage]
})
export class GetresturantPageModule {}
