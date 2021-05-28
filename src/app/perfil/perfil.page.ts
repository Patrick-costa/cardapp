import { Component, OnInit } from '@angular/core';
import { CadastroService } from '../services/cadastro.service';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.page.html',
  styleUrls: ['./perfil.page.scss'],
})
export class PerfilPage implements OnInit {

  cadastro = [];

  constructor(private db: CadastroService) { }

  ngOnInit() {
    this.db.getCadastro().subscribe(caixa => this.cadastro= caixa);
  }

}
