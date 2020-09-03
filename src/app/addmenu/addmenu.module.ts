import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddmenuPageRoutingModule } from './addmenu-routing.module';

import { AddmenuPage } from './addmenu.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    AddmenuPageRoutingModule
  ],
  declarations: [AddmenuPage]
})
export class AddmenuPageModule {}
