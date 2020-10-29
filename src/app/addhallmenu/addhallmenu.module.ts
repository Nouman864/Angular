import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddhallmenuPageRoutingModule } from './addhallmenu-routing.module';

import { AddhallmenuPage } from './addhallmenu.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    AddhallmenuPageRoutingModule
  ],
  declarations: [AddhallmenuPage]
})
export class AddhallmenuPageModule {}
