import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SingleroomPage } from './singleroom.page';

const routes: Routes = [
  {
    path: '',
    component: SingleroomPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SingleroomPageRoutingModule {}
