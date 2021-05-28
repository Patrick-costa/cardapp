import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CadastroLojaPageRoutingModule } from './cadastro-loja-routing.module';

import { CadastroLojaPage } from './cadastro-loja.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CadastroLojaPageRoutingModule
  ],
  declarations: [CadastroLojaPage]
})
export class CadastroLojaPageModule {}
