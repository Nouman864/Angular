import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GetservicePage } from './getservice.page';

const routes: Routes = [
  {
    path: '',
    component: GetservicePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GetservicePageRoutingModule {}
