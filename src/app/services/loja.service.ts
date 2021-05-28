import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Loja } from '../interfaces/loja';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class LojaService {
  private lojaCollection = this.afs.collection<Loja>('Loja');
  constructor(private afs: AngularFirestore) { 
  }

  getLojas(){
    return this.lojaCollection.snapshotChanges().pipe(
      map(actions => {
        return actions.map(a => {
          const data = a.payload.doc.data();
          const id = a.payload.doc.id;
          return { id, ...data};
        })
      })
    )
  }

  getIdLojas(){
    return this.lojaCollection.snapshotChanges().pipe(
      map(actions => {
        return actions.map(a => {
          const id = a.payload.doc.id;
          return { id };
        })
      })
    )
  }

  getLoja(id: string){
    return  this.lojaCollection.doc(id).valueChanges();
  }

  teste(tipo: string){
    
  }



  addLoja(loja: Loja){
    return this.lojaCollection.add(loja);
  }

 

  deleteLoja(id: string){

  };
}
