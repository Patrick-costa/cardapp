import { Component, OnInit } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { TestBed } from '@angular/core/testing';
import { AlertController, LoadingController, ToastController } from '@ionic/angular';
import { Loja } from '../interfaces/loja';
import { Subscription } from 'rxjs';
import { LojaService } from '../services/loja.service';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-cadastro-loja',
  templateUrl: './cadastro-loja.page.html',
  styleUrls: ['./cadastro-loja.page.scss'],
})
export class CadastroLojaPage implements OnInit {

  dados: any = [];
  rua: String;
  private loading: any;
  private loja: Loja = {};


  private lojas = new Array<Loja>();
  private lojasSubscription: Subscription;
  constructor(private http: HttpClient,
    private alertControl: AlertController,
    private loadingController: LoadingController,
    private toastController: ToastController,
    private authService: AuthService,
    private lojaService: LojaService,
    private router: Router
  ) {


  }

  ngOnInit() {
  }


  async saveLoja() {
    await this.presentLoading();

    this.loja.userId = (await this.authService.getAuth().currentUser).uid;
    this.router.navigate(['/principal']);
    this.presentToastSuccess();

    try {
      await this.lojaService.addLoja(this.loja);
      await this.loading.dismiss();
    } catch (error) {
      this.presentToast('Erro ao tentar salvar');
      this.loading.dismiss();
    }
  }

  async presentLoading() {
    this.loading = await this.loadingController.create({
      message: 'Por favor aguarde...',
      cssClass: 'Danger'
    });
    return this.loading.present();
  }

  async presentToast(message) {
    const toast = await this.toastController.create({
      message,
      duration: 5000,
      color: 'danger'
    });
    toast.present();
  }

  async presentToastSuccess() {
    const toast = await this.toastController.create({
      message: 'Cadastrado com Sucesso!',
      duration: 2000,
      color: 'success'
    });
    toast.present();
  }


  async consultaCEP(cep) {

    //Nova variável "cep" somente com dígitos.
    cep = cep.replace(/\D/g, '');

    //Expressão regular para validar o CEP.
    if (cep != "") {
      var validacep = /^[0-9]{8}$/;

      if (validacep.test(cep)) {

        this.http.get("//viacep.com.br/ws/" + cep + "/json").subscribe(cep => {
          this.dados = JSON.stringify(cep);
          let viacep = this.dados;
          if (viacep != null) {
            this.dados = JSON.parse(viacep);
            console.log(this.dados);
          }

        });

      } else {
        const alert = await this.alertControl.create({
          header: 'Dado Inválido',
          message: 'CEP informado não é valido',
          buttons: ['Fechar']
        })

        await alert.present();

      }
    }

  }


}


