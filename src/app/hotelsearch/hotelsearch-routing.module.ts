import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HotelsearchPage } from './hotelsearch.page';

const routes: Routes = [
  {
    path: '',
    component: HotelsearchPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HotelsearchPageRoutingModule {}
