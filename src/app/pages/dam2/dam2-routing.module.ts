import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DAM2Page } from './dam2.page';

const routes: Routes = [
  {
    path: '',
    component: DAM2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DAM2PageRoutingModule {}
