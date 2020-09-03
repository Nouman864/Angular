import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GetresturantPage } from './getresturant.page';

const routes: Routes = [
  {
    path: '',
    component: GetresturantPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GetresturantPageRoutingModule {}
