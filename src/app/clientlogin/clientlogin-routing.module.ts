import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ClientloginPage } from './clientlogin.page';

const routes: Routes = [
  {
    path: '',
    component: ClientloginPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ClientloginPageRoutingModule {}
