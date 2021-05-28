import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CadastroLojaPage } from './cadastro-loja.page';

const routes: Routes = [
  {
    path: '',
    component: CadastroLojaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CadastroLojaPageRoutingModule {}
