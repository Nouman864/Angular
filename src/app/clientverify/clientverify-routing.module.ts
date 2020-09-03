import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ClientverifyPage } from './clientverify.page';

const routes: Routes = [
  {
    path: '',
    component: ClientverifyPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ClientverifyPageRoutingModule {}
