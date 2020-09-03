import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ClientregisterPageRoutingModule } from './clientregister-routing.module';

import { ClientregisterPage } from './clientregister.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    ClientregisterPageRoutingModule
  ],
  declarations: [ClientregisterPage]
})
export class ClientregisterPageModule {}
