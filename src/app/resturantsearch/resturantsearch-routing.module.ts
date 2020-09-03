import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ResturantsearchPage } from './resturantsearch.page';

const routes: Routes = [
  {
    path: '',
    component: ResturantsearchPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ResturantsearchPageRoutingModule {}
