import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { User } from '../interfaces/user';
import { map } from 'rxjs/operators';
import { AngularFireAuth } from '@angular/fire/auth/auth';

@Injectable({
  providedIn: 'root'
})
export class CadastroService {

  private cadastroCollection = this.afs.collection<User>('Cadastro');
  private user: User = {};
  constructor(private afs: AngularFirestore,
) { }

  addCadastro(cadastro: User){
    return this.cadastroCollection.add(cadastro);
  }

  getCadastro(){
    return this.cadastroCollection.snapshotChanges().pipe(
      map(actions => {
        return actions.map(a => {
          const data = a.payload.doc.data();
          const id = a.payload.doc.id;
          return { id, ...data};
        })
      })
    )
  }


  
  
}
