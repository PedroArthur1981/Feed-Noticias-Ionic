import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'landing',
    pathMatch: 'full'
  },
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then(m => m.LoginPageModule)
  },
  {
    path: 'signup',
    loadChildren: () => import('./pages/signup/signup.module').then(m => m.SignupPageModule)
  },
  {
    path: 'landing',
    loadChildren: () => import('./pages/landing/landing.module').then(m => m.LandingPageModule)
  },
  {
    path: 'reset-password',
    loadChildren: () => import('./pages/reset-password/reset-password.module').then(m => m.ResetPasswordPageModule)
  },
  {
    path: 'icons-page',
    loadChildren: () => import('./pages/icons-page/icons-page.module').then(m => m.IconsPagePageModule)
  },
  {
    path: 'tabs1',
    loadChildren: () => import('./tab1/tab1.module').then(m => m.Tab1PageModule)
  },
  {
    path: 'tab-tela-inicial',
    loadChildren: () => import('./pages/icons-page/icons-page.module').then(m => m.IconsPagePageModule)
  },
  {
    path: 'terms-modal',
    loadChildren: () => import('./pages/terms-modal/terms-modal.module').then( m => m.TermsModalPageModule)
  },
  {
    path: 'terms-modal',
    loadChildren: () => import('./pages/terms-modal/terms-modal.module').then( m => m.TermsModalPageModule)
  },
  {
    path: 'tabs2',
    loadChildren: () => import('./tab2/tab2.module').then(m => m.Tab2PageModule)
  },

  {
    path: 'apifilmes',
    loadChildren: () => import('./apifilmes/apifilmes.module').then( m => m.ApifilmesPageModule)
  },
  {
    path: 'apientretenimento',
    loadChildren: () => import('./apientretenimento/apientretenimento.module').then( m => m.ApientretenimentoPageModule)
  },
  {
    path: 'apifinancas',
    loadChildren: () => import('./apifinancas/apifinancas.module').then( m => m.ApifinancasPageModule)
  },
  {
    path: 'desenvolvedores',
    loadChildren: () => import('./desenvolvedores/desenvolvedores.module').then( m => m.DesenvolvedoresPageModule)
  },
  {
    path: 'apitecnologia',
    loadChildren: () => import('./apitecnologia/apitecnologia.module').then( m => m.ApitecnologiaPageModule)
  },
  {
    path: 'apiciencia',
    loadChildren: () => import('./apiciencia/apiciencia.module').then( m => m.ApicienciaPageModule)
  },
  {
    path: 'apisaude',
    loadChildren: () => import('./apisaude/apisaude.module').then( m => m.ApisaudePageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
