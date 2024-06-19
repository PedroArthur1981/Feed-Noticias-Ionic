import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ApientretenimentoPageRoutingModule } from './apientretenimento-routing.module';

import { ApientretenimentoPage } from './apientretenimento.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ApientretenimentoPageRoutingModule
  ],
  declarations: [ApientretenimentoPage]
})
export class ApientretenimentoPageModule {}
