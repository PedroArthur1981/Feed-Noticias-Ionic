import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ApientretenimentoPage } from './apientretenimento.page';

const routes: Routes = [
  {
    path: '',
    component: ApientretenimentoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ApientretenimentoPageRoutingModule {}
