import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SelectPropertyPageRoutingModule } from './select-property-routing.module';

import { SelectPropertyPage } from './select-property.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    SelectPropertyPageRoutingModule
  ],
  declarations: [SelectPropertyPage]
})
export class SelectPropertyPageModule {}
