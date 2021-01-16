import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GetallflatsPageRoutingModule } from './getallflats-routing.module';

import { GetallflatsPage } from './getallflats.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GetallflatsPageRoutingModule
  ],
  declarations: [GetallflatsPage]
})
export class GetallflatsPageModule {}
