import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BooktablePage } from './booktable.page';

const routes: Routes = [
  {
    path: '',
    component: BooktablePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BooktablePageRoutingModule {}
