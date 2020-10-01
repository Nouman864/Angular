import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PaymenttokenhotelPageRoutingModule } from './paymenttokenhotel-routing.module';

import { PaymenttokenhotelPage } from './paymenttokenhotel.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    PaymenttokenhotelPageRoutingModule
  ],
  declarations: [PaymenttokenhotelPage]
})
export class PaymenttokenhotelPageModule {}
