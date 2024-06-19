import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IconsPagePage } from './icons-page.page';

const routes: Routes = [
  {
    path: '',
    component: IconsPagePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IconsPagePageRoutingModule {}
