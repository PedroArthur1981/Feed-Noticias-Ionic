import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ApicienciaPage } from './apiciencia.page';

const routes: Routes = [
  {
    path: '',
    component: ApicienciaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ApicienciaPageRoutingModule {}



