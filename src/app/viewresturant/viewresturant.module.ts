import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ViewresturantPageRoutingModule } from './viewresturant-routing.module';

import { ViewresturantPage } from './viewresturant.page';
import { SharedModule } from '../shared/shared.module';
import { RatingresturantComponent } from './ratingresturant/ratingresturant.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    SharedModule,
    ViewresturantPageRoutingModule
  ],
  declarations: [ViewresturantPage, RatingresturantComponent],
  entryComponents: [RatingresturantComponent]
})
export class ViewresturantPageModule {}
