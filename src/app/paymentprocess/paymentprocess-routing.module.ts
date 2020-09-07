import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PaymentprocessPage } from './paymentprocess.page';

const routes: Routes = [
  {
    path: '',
    component: PaymentprocessPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PaymentprocessPageRoutingModule {}
