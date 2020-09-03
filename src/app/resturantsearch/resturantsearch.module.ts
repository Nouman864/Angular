import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ResturantsearchPageRoutingModule } from './resturantsearch-routing.module';

import { ResturantsearchPage } from './resturantsearch.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ResturantsearchPageRoutingModule
  ],
  declarations: [ResturantsearchPage]
})
export class ResturantsearchPageModule {}
