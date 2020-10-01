import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ViewhotelPageRoutingModule } from './viewhotel-routing.module';

import { ViewhotelPage } from './viewhotel.page';
import { SharedModule } from '../shared/shared.module';
import { RatinghotelComponent } from './ratinghotel/ratinghotel.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    SharedModule,
    ViewhotelPageRoutingModule
  ],
  declarations: [ViewhotelPage,RatinghotelComponent],
  entryComponents: [RatinghotelComponent]
})
export class ViewhotelPageModule {}
