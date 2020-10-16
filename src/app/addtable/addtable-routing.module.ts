import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddtablePage } from './addtable.page';

const routes: Routes = [
  {
    path: '',
    component: AddtablePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddtablePageRoutingModule {}
