import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GethotelPage } from './gethotel.page';

const routes: Routes = [
  {
    path: '',
    component: GethotelPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GethotelPageRoutingModule {}
