import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VisualizarLojaPageRoutingModule } from './visualizar-loja-routing.module';

import { VisualizarLojaPage } from './visualizar-loja.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VisualizarLojaPageRoutingModule
  ],
  declarations: [VisualizarLojaPage]
})
export class VisualizarLojaPageModule {}
