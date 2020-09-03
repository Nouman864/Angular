import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BookhotelPage } from './bookhotel.page';

const routes: Routes = [
  {
    path: '',
    component: BookhotelPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BookhotelPageRoutingModule {}
