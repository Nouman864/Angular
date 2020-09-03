import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ClientloginPageRoutingModule } from './clientlogin-routing.module';

import { ClientloginPage } from './clientlogin.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    ClientloginPageRoutingModule
  ],
  declarations: [ClientloginPage]
})
export class ClientloginPageModule {}
