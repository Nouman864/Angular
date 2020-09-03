import {ReactiveFormsModule} from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BooktablePageRoutingModule } from './booktable-routing.module';

import { BooktablePage } from './booktable.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    BooktablePageRoutingModule
  ],
  declarations: [BooktablePage]
})
export class BooktablePageModule {}
