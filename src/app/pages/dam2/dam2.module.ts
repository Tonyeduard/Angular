import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DAM2PageRoutingModule } from './dam2-routing.module';

import { DAM2Page } from './dam2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DAM2PageRoutingModule
  ],
  declarations: [DAM2Page]
})
export class DAM2PageModule {}
