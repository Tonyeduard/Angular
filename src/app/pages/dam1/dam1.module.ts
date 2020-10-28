import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DAM1PageRoutingModule } from './dam1-routing.module';

import { DAM1Page } from './dam1.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DAM1PageRoutingModule
  ],
  declarations: [DAM1Page]
})
export class DAM1PageModule {}
