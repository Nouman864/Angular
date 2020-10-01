import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PaymenthotelPageRoutingModule } from './paymenthotel-routing.module';

import { PaymenthotelPage } from './paymenthotel.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    PaymenthotelPageRoutingModule
  ],
  declarations: [PaymenthotelPage]
})
export class PaymenthotelPageModule {}
