import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SearchhallPageRoutingModule } from './searchhall-routing.module';

import { SearchhallPage } from './searchhall.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SearchhallPageRoutingModule
  ],
  declarations: [SearchhallPage]
})
export class SearchhallPageModule {}
