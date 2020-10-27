import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FlatprofilePage } from './flatprofile.page';

const routes: Routes = [
  {
    path: '',
    component: FlatprofilePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FlatprofilePageRoutingModule {}
