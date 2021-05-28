import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoadingController, ToastController } from '@ionic/angular';
import { User } from '../interfaces/user';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(private loadingController: LoadingController,
    private toastController: ToastController,
    private AuthService: AuthService,
    private router: Router,) { }

  public userLogin: User = {};
  private loading: any;

  ngOnInit() {
  }

  async login() {
    await this.presentLoading();

    try {
      await this.AuthService.login(this.userLogin);
      
      this.router.navigate(['/principal'])
      
    } catch (error) {
      let message: string;
      switch (error.code) {
        case 'auth/invalid-email':
          message = 'Email inválido';
          break;

        case 'auth/weak-password':
          message = 'A Senha tem que ter no mínimo 6 caracteres';
          break;

        case 'auth/argument-error':
          message = 'Digite o e-mail e a senha';
          break;

        case 'auth/network-request-failed':
          message = 'Sem conexão como servidor';
          break;

        case 'auth/wrong-password':
          message = 'Senha incorreta';
          break;

        case 'auth/user-not-found':
          message = 'Email não cadastrado';
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
