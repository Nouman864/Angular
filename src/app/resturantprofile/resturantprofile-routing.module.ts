import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ResturantprofilePage } from './resturantprofile.page';

const routes: Routes = [
  {
    path: '',
    component: ResturantprofilePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ResturantprofilePageRoutingModule {}
