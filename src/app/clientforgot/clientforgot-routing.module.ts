import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ClientforgotPage } from './clientforgot.page';

const routes: Routes = [
  {
    path: '',
    component: ClientforgotPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ClientforgotPageRoutingModule {}
