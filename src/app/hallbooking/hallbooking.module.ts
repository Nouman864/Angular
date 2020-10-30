import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HallbookingPageRoutingModule } from './hallbooking-routing.module';

import { HallbookingPage } from './hallbooking.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    HallbookingPageRoutingModule
  ],
  declarations: [HallbookingPage]
})
export class HallbookingPageModule {}
