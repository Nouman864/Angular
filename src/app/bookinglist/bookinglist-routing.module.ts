import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BookinglistPage } from './bookinglist.page';

const routes: Routes = [
  {
    path: '',
    component: BookinglistPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BookinglistPageRoutingModule {}
