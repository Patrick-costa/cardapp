import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VisualizarLojaPage } from './visualizar-loja.page';

const routes: Routes = [
  {
    path: '',
    component: VisualizarLojaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VisualizarLojaPageRoutingModule {}
