import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BookroomPageRoutingModule } from './bookroom-routing.module';

import { BookroomPage } from './bookroom.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    BookroomPageRoutingModule
  ],
  declarations: [BookroomPage]
})
export class BookroomPageModule {}
