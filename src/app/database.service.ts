import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, docChanges } from 'angularfire2/firestore';
import { Subject, Subscription } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DatabaseService {
  users: AngularFirestoreCollection;
  usrExpenses: AngularFirestoreCollection;

  userExpensesData: any;
  usrExpensesSubscription: Subscription;
  usrExpensesSuccess$: Subject<any> = new Subject<any>();

  db: AngularFirestore;

  constructor(db: AngularFirestore) {
    this.users = db.collection('/users');
    this.usrExpenses = db.collection('/expenses');
    this.db = db;

  }

  getusrExpenses() {
    let items = this.db.collection("/expenses").get().toPromise().then(function (querySnapshot) {
      querySnapshot.forEach(function (doc) {
        // doc.data() is never undefined for query doc snapshots
        console.log(doc.id, " => ", doc.data());
      });
    })
      .catch(function (error) {
        console.log("Error getting documents: ", error);
      });
    return items;
  }

  successCallback = (querySnapshot) => {
    const data = [];
    querySnapshot.forEach(function (doc) {
      // doc.data() is never undefined for query doc snapshots
      const newItem = Object.assign(doc.data(), { _id: doc.id });
      data.push(newItem);
      console.log(doc.id, ' => ', doc.data());
    });
    this.userExpensesData = data;
    this.usrExpensesSuccess$.next(data);
  }

  getusrExpensesObs(forceRemote: boolean) {
    if (this.userExpensesData && !forceRemote) {
      setTimeout(() => {
        this.usrExpensesSuccess$.next(this.userExpensesData);
      }, 0);

      return this.usrExpensesSuccess$;
    } else {
      this.usrExpensesSubscription = this.db.collection('/expenses').get().subscribe(this.successCallback);
    }

    return this.usrExpensesSuccess$;
  }

  /* ADD RECORDS */
  addRecord(item) {
    this.db.collection('/expenses').add(item)
      .then(() =>  {
        console.log("Document successfully written!");
        this.getusrExpensesObs(true);
      })
      .catch(function (error) {
        console.error("Error writing document: ", error);
      });
  }

  /* DELETE RECORDS */
  deleteRecord(docId) {
    console.log(docId);
    this.db.collection("/expenses").doc(docId).delete()
      .then(() => {
        console.log("Document successfully deleted!");
        this.getusrExpensesObs(true);
      }).catch(function (error) {
        console.error("Error removing document: ", error);
      });
  }
}