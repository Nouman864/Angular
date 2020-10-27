import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FlatprofilePageRoutingModule } from './flatprofile-routing.module';

import { FlatprofilePage } from './flatprofile.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    FlatprofilePageRoutingModule
  ],
  declarations: [FlatprofilePage]
})
export class FlatprofilePageModule {}
