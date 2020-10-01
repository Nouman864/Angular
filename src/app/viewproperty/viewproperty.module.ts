import { NgModule,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
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
  
  schemas:  [ CUSTOM_ELEMENTS_SCHEMA ],

  declarations: [ViewpropertyPage,RatingComponent],
  entryComponents: [RatingComponent]
})
export class ViewpropertyPageModule {}
