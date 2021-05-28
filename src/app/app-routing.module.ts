import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';
import { LoginGuard } from './guards/login.guard';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule), canActivate:[LoginGuard]
  },
  {
    path: 'cadastro-user',
    loadChildren: () => import('./cadastro-user/cadastro-user.module').then( m => m.CadastroUserPageModule)
  },
  {
    path: 'cadastro-loja',
    loadChildren: () => import('./cadastro-loja/cadastro-loja.module').then( m => m.CadastroLojaPageModule),  canActivate:[AuthGuard]
  },
  {
    path: 'perfil',
    loadChildren: () => import('./perfil/perfil.module').then( m => m.PerfilPageModule),  canActivate:[AuthGuard]
  },
  {
    path: 'cadastrar-cardapio',
    loadChildren: () => import('./cadastrar-cardapio/cadastrar-cardapio.module').then( m => m.CadastrarCardapioPageModule),  canActivate:[AuthGuard]
  },
  {
    path: 'esqueci-senha',
    loadChildren: () => import('./esqueci-senha/esqueci-senha.module').then( m => m.EsqueciSenhaPageModule),
  },
  {
    path: 'visualizar-cardapio',
    loadChildren: () => import('./visualizar-cardapio/visualizar-cardapio.module').then( m => m.VisualizarCardapioPageModule),  canActivate:[AuthGuard]
  },
  {
    path: 'principal',
    loadChildren: () => import('./principal/principal.module').then( m => m.PrincipalPageModule), canActivate:[AuthGuard]
  },
  {
    path: 'visualizar-loja',
    loadChildren: () => import('./visualizar-loja/visualizar-loja.module').then( m => m.VisualizarLojaPageModule),  canActivate:[AuthGuard]
  },
  {
    path: 'teste',
    loadChildren: () => import('./teste/teste.module').then( m => m.TestePageModule)
  },

 
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
