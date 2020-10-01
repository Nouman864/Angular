import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PaymenthotelPage } from './paymenthotel.page';

const routes: Routes = [
  {
    path: '',
    component: PaymenthotelPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PaymenthotelPageRoutingModule {}
