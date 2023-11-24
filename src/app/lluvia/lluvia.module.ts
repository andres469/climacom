import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LluviaPageRoutingModule } from './lluvia-routing.module';

import { LluviaPage } from './lluvia.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LluviaPageRoutingModule
  ],
  declarations: [LluviaPage]
})
export class LluviaPageModule {}
