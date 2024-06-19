import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginPage } from './login.page';
import { IconsPagePage } from '../icons-page/icons-page.page';  // Importe sua página 'icons-page'

const routes: Routes = [
  {
    path: '',
    component: LoginPage
  },
  {
    path: 'icons-page',
    component: IconsPagePage  // Adicione a rota para a página 'icons-page'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LoginPageRoutingModule {}
