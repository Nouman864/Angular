import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OnlinepayPageRoutingModule } from './onlinepay-routing.module';

import { OnlinepayPage } from './onlinepay.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    OnlinepayPageRoutingModule
  ],
  declarations: [OnlinepayPage]
})
export class OnlinepayPageModule {}
