import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BookroomPage } from './bookroom.page';

const routes: Routes = [
  {
    path: '',
    component: BookroomPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BookroomPageRoutingModule {}
