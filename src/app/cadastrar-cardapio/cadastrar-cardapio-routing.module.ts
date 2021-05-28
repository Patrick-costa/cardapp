import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CadastrarCardapioPage } from './cadastrar-cardapio.page';

const routes: Routes = [
  {
    path: '',
    component: CadastrarCardapioPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CadastrarCardapioPageRoutingModule {}
