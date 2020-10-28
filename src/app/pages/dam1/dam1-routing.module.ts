import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DAM1Page } from './dam1.page';

const routes: Routes = [
  {
    path: '',
    component: DAM1Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DAM1PageRoutingModule {}
