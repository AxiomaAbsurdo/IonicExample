import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, docChanges } from 'angularfire2/firestore';
import { Subject, Subscription } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DatabaseService {
    constructor( public db: AngularFirestore) {
  }

  /*BUSCA LA LISTA DE RECORDS */
  listRecords() {
    return this.db.collection('/expenses').get();
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
        // doc.data() is never undefined for query doc snapshots
        console.log(doc.id, ' => ', doc.data());
        exTotal = exTotal + doc.data().cost;
        console.log(doc.data().cost);
        console.log(exTotal);
      });
    });
  }
}
