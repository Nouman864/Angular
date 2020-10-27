import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HotelprofilePage } from './hotelprofile.page';

const routes: Routes = [
  {
    path: '',
    component: HotelprofilePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HotelprofilePageRoutingModule {}
