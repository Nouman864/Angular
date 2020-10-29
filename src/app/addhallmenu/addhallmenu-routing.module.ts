import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddhallmenuPage } from './addhallmenu.page';

const routes: Routes = [
  {
    path: '',
    component: AddhallmenuPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddhallmenuPageRoutingModule {}
