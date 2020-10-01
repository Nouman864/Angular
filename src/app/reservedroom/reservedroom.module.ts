import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ReservedroomPageRoutingModule } from './reservedroom-routing.module';

import { ReservedroomPage } from './reservedroom.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    ReservedroomPageRoutingModule
  ],
  declarations: [ReservedroomPage]
})
export class ReservedroomPageModule {}
