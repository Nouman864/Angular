import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ClientcategoryPageRoutingModule } from './clientcategory-routing.module';

import { ClientcategoryPage } from './clientcategory.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    ClientcategoryPageRoutingModule
  ],
  declarations: [ClientcategoryPage]
})
export class ClientcategoryPageModule {}
