import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddhotelPageRoutingModule } from './addhotel-routing.module';
import { SharedModule } from '../shared/shared.module';
import { AddhotelPage } from './addhotel.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    SharedModule,
    AddhotelPageRoutingModule
  ],
  declarations: [AddhotelPage]
})
export class AddhotelPageModule {}
