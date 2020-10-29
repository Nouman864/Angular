import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddhallPage } from './addhall.page';

const routes: Routes = [
  {
    path: '',
    component: AddhallPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddhallPageRoutingModule {}
