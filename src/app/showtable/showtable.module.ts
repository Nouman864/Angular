import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ShowtablePageRoutingModule } from './showtable-routing.module';

import { ShowtablePage } from './showtable.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    ShowtablePageRoutingModule
  ],
  declarations: [ShowtablePage]
})
export class ShowtablePageModule {}
