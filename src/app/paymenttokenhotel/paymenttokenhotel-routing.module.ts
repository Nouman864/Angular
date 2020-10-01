import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PaymenttokenhotelPage } from './paymenttokenhotel.page';

const routes: Routes = [
  {
    path: '',
    component: PaymenttokenhotelPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PaymenttokenhotelPageRoutingModule {}
