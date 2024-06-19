import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ApisaudePage } from './apisaude.page';

const routes: Routes = [
  {
    path: '',
    component: ApisaudePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ApisaudePageRoutingModule {}


