import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PaymenttokenPage } from './paymenttoken.page';

const routes: Routes = [
  {
    path: '',
    component: PaymenttokenPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PaymenttokenPageRoutingModule {}
