import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddhallPageRoutingModule } from './addhall-routing.module';

import { AddhallPage } from './addhall.page';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    SharedModule,
    AddhallPageRoutingModule
  ],
  declarations: [AddhallPage]
})
export class AddhallPageModule {}
