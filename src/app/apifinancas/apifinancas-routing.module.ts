import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ApifinancasPage } from './apifinancas.page';

const routes: Routes = [
  {
    path: '',
    component: ApifinancasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ApifinancasPageRoutingModule {}


