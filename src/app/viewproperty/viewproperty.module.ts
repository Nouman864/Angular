import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ViewpropertyPageRoutingModule } from './viewproperty-routing.module';

import { ViewpropertyPage } from './viewproperty.page';
import { SharedModule } from '../shared/shared.module';
import { RatingComponent } from './rating/rating.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    SharedModule,
    ViewpropertyPageRoutingModule
  ],
  declarations: [ViewpropertyPage,RatingComponent],
  entryComponents: [RatingComponent]
})
export class ViewpropertyPageModule {}
