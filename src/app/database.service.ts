import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';

@Injectable({
  providedIn: 'root'
})
export class DatabaseService {
  users: AngularFirestoreCollection;
  constructor(db: AngularFirestore) {
    this.users = db.collection('/users');
  }

  getItems() {
    return this.users.valueChanges();
  }
}
