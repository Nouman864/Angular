import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SingleroomPageRoutingModule } from './singleroom-routing.module';

import { SingleroomPage } from './singleroom.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    SingleroomPageRoutingModule
  ],
  declarations: [SingleroomPage]
})
export class SingleroomPageModule {}
