import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OnlineflatpayPage } from './onlineflatpay.page';

const routes: Routes = [
  {
    path: '',
    component: OnlineflatpayPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OnlineflatpayPageRoutingModule {}
