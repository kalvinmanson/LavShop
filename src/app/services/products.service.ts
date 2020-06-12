import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(
    private firestore: AngularFirestore
  ) { }

  list() {
    return this.firestore.collection('products').valueChanges();
  }
  store(product) {
    product.id = this.makeid(30);
    return this.firestore.collection('products').doc(product.id).set(product);
  }
  delete(product) {
    return this.firestore.collection('products').doc(product.id).delete();
  }

  makeid(length) {
    var result           = '';
    var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;
    for ( var i = 0; i < length; i++ ) {
       result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
 }
}
