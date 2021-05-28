import { Component, OnInit } from '@angular/core';
import { CadastroService } from '../services/cadastro.service';
import { Cadastro } from '../interfaces/cadastro';

@Component({
  selector: 'app-teste',
  templateUrl: './teste.page.html',
  styleUrls: ['./teste.page.scss'],
})
export class TestePage implements OnInit {

  public email: Cadastro  = {};
  dados = [];
 
  constructor(
    private cad: CadastroService
  ) { }

  ngOnInit() {
    this.cad.getCadastro().subscribe(results => { this.dados = results } )
  } 

  captura(form){
    

    for(let i=0; i < this.dados.length; i++){
      if(form.value.email == this.dados[i].email){
        this.email = this.dados[i].email;
        console.log(this.email);
      }
    }
  }

}
