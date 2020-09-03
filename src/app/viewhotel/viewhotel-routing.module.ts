import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ViewhotelPage } from './viewhotel.page';

const routes: Routes = [
  {
    path: '',
    component: ViewhotelPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ViewhotelPageRoutingModule {}
