import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CadastrarCardapioPageRoutingModule } from './cadastrar-cardapio-routing.module';

import { CadastrarCardapioPage } from './cadastrar-cardapio.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CadastrarCardapioPageRoutingModule
  ],
  declarations: [CadastrarCardapioPage]
})
export class CadastrarCardapioPageModule {}
