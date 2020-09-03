import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ClientforgotPageRoutingModule } from './clientforgot-routing.module';

import { ClientforgotPage } from './clientforgot.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    ClientforgotPageRoutingModule
  ],
  declarations: [ClientforgotPage]
})
export class ClientforgotPageModule {}
