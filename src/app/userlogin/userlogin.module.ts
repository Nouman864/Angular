import { ReactiveFormsModule} from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UserloginPageRoutingModule } from './userlogin-routing.module';

import { UserloginPage } from './userlogin.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
     ReactiveFormsModule,
    UserloginPageRoutingModule
  ],
  declarations: [UserloginPage]
})
export class UserloginPageModule {}
