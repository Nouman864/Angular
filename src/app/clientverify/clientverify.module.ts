import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ClientverifyPageRoutingModule } from './clientverify-routing.module';

import { ClientverifyPage } from './clientverify.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    ClientverifyPageRoutingModule
  ],
  declarations: [ClientverifyPage]
})
export class ClientverifyPageModule {}
