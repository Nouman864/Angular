import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MarraigehallPageRoutingModule } from './marraigehall-routing.module';

import { MarraigehallPage } from './marraigehall.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    MarraigehallPageRoutingModule
  ],
  declarations: [MarraigehallPage]
})
export class MarraigehallPageModule {}
