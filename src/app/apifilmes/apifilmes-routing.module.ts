import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ApifilmesPage } from './apifilmes.page';

const routes: Routes = [
  {
    path: '',
    component: ApifilmesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ApifilmesPageRoutingModule {}
