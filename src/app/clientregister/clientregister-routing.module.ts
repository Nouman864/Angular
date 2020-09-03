import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ClientregisterPage } from './clientregister.page';

const routes: Routes = [
  {
    path: '',
    component: ClientregisterPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ClientregisterPageRoutingModule {}
