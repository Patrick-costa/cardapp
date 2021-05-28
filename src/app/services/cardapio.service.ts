import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Cardapio } from '../interfaces/cardapio';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CardapioService {

  private cardapioCollection = this.afs.collection<Cardapio>('Cardapio');
  constructor(private afs: AngularFirestore) { }

  addCardapio(cardapio: Cardapio) {
    return this.cardapioCollection.add(cardapio);
  }



}