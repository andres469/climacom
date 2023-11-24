import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UltiPageRoutingModule } from './ulti-routing.module';

import { UltiPage } from './ulti.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UltiPageRoutingModule
  ],
  declarations: [UltiPage]
})
export class UltiPageModule {}
