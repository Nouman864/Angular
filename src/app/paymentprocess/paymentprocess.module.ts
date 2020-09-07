import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PaymentprocessPageRoutingModule } from './paymentprocess-routing.module';

import { PaymentprocessPage } from './paymentprocess.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    PaymentprocessPageRoutingModule
  ],
  declarations: [PaymentprocessPage]
})
export class PaymentprocessPageModule {}
