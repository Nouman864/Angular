import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ShowtablePage } from './showtable.page';

const routes: Routes = [
  {
    path: '',
    component: ShowtablePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ShowtablePageRoutingModule {}
