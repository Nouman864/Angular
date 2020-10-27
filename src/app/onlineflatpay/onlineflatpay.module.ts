import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OnlineflatpayPageRoutingModule } from './onlineflatpay-routing.module';

import { OnlineflatpayPage } from './onlineflatpay.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    OnlineflatpayPageRoutingModule
  ],
  declarations: [OnlineflatpayPage]
})
export class OnlineflatpayPageModule {}
