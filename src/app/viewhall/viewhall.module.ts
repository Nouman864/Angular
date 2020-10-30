import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ViewhallPageRoutingModule } from './viewhall-routing.module';

import { ViewhallPage } from './viewhall.page';
import { HallratingComponent } from './hallrating/hallrating.component';
import { SharedModule } from '../shared/shared.module';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    SharedModule,
    ViewhallPageRoutingModule
  ],
  schemas:  [ CUSTOM_ELEMENTS_SCHEMA ],
  declarations: [ViewhallPage, HallratingComponent],
  entryComponents: [HallratingComponent]
})
export class ViewhallPageModule {}
