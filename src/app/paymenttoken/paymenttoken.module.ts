import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PaymenttokenPageRoutingModule } from './paymenttoken-routing.module';

import { PaymenttokenPage } from './paymenttoken.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    PaymenttokenPageRoutingModule
  ],
  declarations: [PaymenttokenPage]
})
export class PaymenttokenPageModule {}
