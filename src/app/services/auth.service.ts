import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { User } from '../interfaces/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private afa: AngularFireAuth) { }

  user: User = {};

  login(user: User){
    return this.afa.signInWithEmailAndPassword(user.email, user.senha);
  }

  cadastrar(user:User){
    return this.afa.createUserWithEmailAndPassword(user.email, user.senha);
  }

  sair(){
    return this.afa.signOut();
  }


  getAuth(){
    return this.afa
  }



}
