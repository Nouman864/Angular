import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HallbookingPage } from './hallbooking.page';

const routes: Routes = [
  {
    path: '',
    component: HallbookingPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HallbookingPageRoutingModule {}
