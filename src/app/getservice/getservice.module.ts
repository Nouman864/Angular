import {ReactiveFormsModule} from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GetservicePageRoutingModule } from './getservice-routing.module';

import { GetservicePage } from './getservice.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    GetservicePageRoutingModule
  ],
  declarations: [GetservicePage]
})
export class GetservicePageModule {}
