import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SearchingPageRoutingModule } from './searching-routing.module';
import { SearchingPage } from './searching.page';
import { SearchPipe } from './appPipes/search.pipe';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    
    SearchingPageRoutingModule
  ],
  declarations: [SearchingPage, SearchPipe]
})
export class SearchingPageModule {}
