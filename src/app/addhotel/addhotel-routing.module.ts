import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddhotelPage } from './addhotel.page';

const routes: Routes = [
  {
    path: '',
    component: AddhotelPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddhotelPageRoutingModule {}
