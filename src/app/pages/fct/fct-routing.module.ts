import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FCTPage } from './fct.page';

const routes: Routes = [
  {
    path: '',
    component: FCTPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FCTPageRoutingModule {}
