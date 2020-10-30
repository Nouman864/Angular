import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SearchhallPage } from './searchhall.page';

const routes: Routes = [
  {
    path: '',
    component: SearchhallPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SearchhallPageRoutingModule {}
