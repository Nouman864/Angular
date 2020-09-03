import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BookhotelPageRoutingModule } from './bookhotel-routing.module';

import { BookhotelPage } from './bookhotel.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    BookhotelPageRoutingModule
  ],
  declarations: [BookhotelPage]
})
export class BookhotelPageModule {}
