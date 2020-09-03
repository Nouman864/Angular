import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GethotelPageRoutingModule } from './gethotel-routing.module';

import { GethotelPage } from './gethotel.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    GethotelPageRoutingModule
  ],
  declarations: [GethotelPage]
})
export class GethotelPageModule {}
