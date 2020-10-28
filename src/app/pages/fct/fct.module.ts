import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FCTPageRoutingModule } from './fct-routing.module';

import { FCTPage } from './fct.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FCTPageRoutingModule
  ],
  declarations: [FCTPage]
})
export class FCTPageModule {}
