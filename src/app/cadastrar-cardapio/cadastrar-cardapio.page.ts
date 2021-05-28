import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController, LoadingController, ToastController } from '@ionic/angular';
import { Cardapio } from '../interfaces/cardapio';
import { Subscription } from 'rxjs';
import { CardapioService } from '../services/cardapio.service';
import { AuthService } from '../services/auth.service';
import { Loja } from '../interfaces/loja';
import { ActivatedRoute } from '@angular/router';
import { LojaService } from '../services/loja.service';



@Component({
  selector: 'app-cadastrar-cardapio',
  templateUrl: './cadastrar-cardapio.page.html',
  styleUrls: ['./cadastrar-cardapio.page.scss'],
})
export class CadastrarCardapioPage implements OnInit {

  private loading: any;
  private cardapio: Cardapio = {};
  loja = [];
  idLoja = [];
   
  constructor(private alertControl: AlertController,
    private loadingController: LoadingController,
    private toastController: ToastController,
    private authService: AuthService,
    private cardapioService: CardapioService,
    private db: LojaService,
    private db2: LojaService
  ) { 
  
  }



  ngOnInit() {
    this.db.getLojas().subscribe(caixa => this.loja = caixa);
    this.db2.getIdLojas().subscribe(caixa2 => this.idLoja = caixa2);
  }

  async cadastrar() {
    await this.presentLoading();

    this.cardapio.userId = (await this.authService.getAuth().currentUser).uid;

    try {
      await this.cardapioService.addCardapio(this.cardapio);
      await this.loading.dismiss();
    } catch (error) {
      console.log(error);
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

}
