import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ApitecnologiaPage } from './apitecnologia.page';

const routes: Routes = [
  {
    path: '',
    component: ApitecnologiaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ApitecnologiaPageRoutingModule {}
