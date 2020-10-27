import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RentservicePage } from './rentservice.page';

const routes: Routes = [
  {
    path: '',
    component: RentservicePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RentservicePageRoutingModule {}
