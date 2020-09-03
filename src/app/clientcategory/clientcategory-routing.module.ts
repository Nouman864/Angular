import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ClientcategoryPage } from './clientcategory.page';

const routes: Routes = [
  {
    path: '',
    component: ClientcategoryPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ClientcategoryPageRoutingModule {}
