import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, docChanges, Query } from 'angularfire2/firestore';
import { Subject, Subscription, Observable } from 'rxjs';
import { AngularFireAuth } from 'angularfire2/auth';


@Injectable({
  providedIn: 'root'
})
export class DatabaseService {
  user: Observable<firebase.User>;
  userMetadata: string;

  constructor(public db: AngularFirestore, private firebaseAuth: AngularFireAuth) {
    this.user = firebaseAuth.authState;
  }

  /*BUSCA LA LISTA DE RECORDS */
  listRecords() {
    return this.db.collection('/expenses').get();
  }

  listRecordsByUser() {
    const currentLogedUser = this.currentUser;
    return this.db.collection('/expenses').ref.where('addedBy', '==', currentLogedUser).get();
  }

  /* ADD RECORDS */
  addRecord(item) {
    return this.db.collection('/expenses').add(item);
  }

  /* DELETE RECORDS */
  deleteRecord(docId) {
    return this.db.collection('/expenses').doc(docId).delete();
  }

  /*CALCULA TOTAL */
  totalExpenses() {
    let exTotal = 0;
    this.db.collection('/expenses').get().subscribe(function (querySnapshot) {
      querySnapshot.forEach(function (doc) {
        // console.log(doc.id, ' => ', doc.data());
        exTotal = exTotal + doc.data().cost;
        // console.log(doc.data().cost);
        // console.log(exTotal);
      });
    });
  }

  /*OBTENER CREDITO*/
  getCredit(userId) {
    return this.db.collection('/users').ref.where('uid', '==', userId).get()
  }


  /* LOGIN - AUTENTICAR USUARIO */
  login(email: string, password: string) {
    return this.firebaseAuth
      .auth
      .signInWithEmailAndPassword(email, password);
  }

  get currentUser() {
    return this.firebaseAuth.auth.currentUser.uid;
  }

}
