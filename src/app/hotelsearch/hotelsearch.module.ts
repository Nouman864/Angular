import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HotelsearchPageRoutingModule } from './hotelsearch-routing.module';

import { HotelsearchPage } from './hotelsearch.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HotelsearchPageRoutingModule
  ],
  declarations: [HotelsearchPage]
})
export class HotelsearchPageModule {}
