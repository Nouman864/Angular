import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GetallflatsPage } from './getallflats.page';

const routes: Routes = [
  {
    path: '',
    component: GetallflatsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GetallflatsPageRoutingModule {}
