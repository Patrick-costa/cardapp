import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoadingController, ToastController } from '@ionic/angular';
import { User } from '../interfaces/user';
import { AuthService } from '../services/auth.service';
import { CadastroService } from '../services/cadastro.service';
import { Cadastro } from '../interfaces/cadastro';


@Component({
  selector: 'app-cadastro-user',
  templateUrl: './cadastro-user.page.html',
  styleUrls: ['./cadastro-user.page.scss'],
})
export class CadastroUserPage implements OnInit {

  constructor(private loadingController: LoadingController,
    private toastController: ToastController,
    private AuthService: AuthService,
    private router: Router,
    private cadastroService: CadastroService) { }

  public userRegister: User = {};
  public user: User = {};
  private loading: any;


  ngOnInit() {
  }


  async cadastrar() {
    await this.presentLoading();

    try {
      await this.cadastroService.addCadastro(this.userRegister);

      await this.AuthService.cadastrar(this.userRegister);
      this.router.navigate(['/login']);
    } catch (error) {
      let message: string;
      switch (error.code) {
        case 'auth/email-already-in-use':
          message = 'Email já cadastrado';
          break;

        case 'auth/invalid-email':
          message = 'Email inválido';
          break;

        case 'auth/weak-password':
          message = 'A Senha tem que ter no mínimo 6 caracteres';
          break;


        case 'auth/argument-error':
          message = 'E-mail ou senha';
          break;

        case 'auth/network-request-failed':
          message = 'Sem conexão como servidor';
          break;


      }
      console.log(error);
      this.presentToast(message);
    } finally {
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

}
