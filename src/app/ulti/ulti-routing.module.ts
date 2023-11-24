import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UltiPage } from './ulti.page';

const routes: Routes = [
  {
    path: '',
    component: UltiPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UltiPageRoutingModule {}
