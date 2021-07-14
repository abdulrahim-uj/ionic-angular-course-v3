import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RecipieDetailPage } from './recipie-detail.page';

const routes: Routes = [
  {
    path: '',
    component: RecipieDetailPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RecipieDetailPageRoutingModule {}
