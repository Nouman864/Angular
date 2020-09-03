import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ShowmenuPageRoutingModule } from './showmenu-routing.module';

import { ShowmenuPage } from './showmenu.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    ShowmenuPageRoutingModule
  ],
  declarations: [ShowmenuPage]
})
export class ShowmenuPageModule {}
