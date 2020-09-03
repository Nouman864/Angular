import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ViewresturantPage } from './viewresturant.page';

const routes: Routes = [
  {
    path: '',
    component: ViewresturantPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ViewresturantPageRoutingModule {}
