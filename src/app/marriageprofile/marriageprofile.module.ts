import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MarriageprofilePageRoutingModule } from './marriageprofile-routing.module';

import { MarriageprofilePage } from './marriageprofile.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    MarriageprofilePageRoutingModule
  ],
  declarations: [MarriageprofilePage]
})
export class MarriageprofilePageModule {}
