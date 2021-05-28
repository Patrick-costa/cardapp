import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VisualizarCardapioPageRoutingModule } from './visualizar-cardapio-routing.module';

import { VisualizarCardapioPage } from './visualizar-cardapio.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VisualizarCardapioPageRoutingModule
  ],
  declarations: [VisualizarCardapioPage]
})
export class VisualizarCardapioPageModule {}
