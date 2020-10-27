import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RentservicePageRoutingModule } from './rentservice-routing.module';

import { RentservicePage } from './rentservice.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    RentservicePageRoutingModule
  ],
  declarations: [RentservicePage]
})
export class RentservicePageModule {}
