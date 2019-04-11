import { Injectable } from '@angular/core';
import { Subscription, Subject } from 'rxjs';
import { DatabaseService } from '../database.service';

@Injectable({
  providedIn: 'root'
})
export class ExpensesListService {
  data: any;
  subscription: Subscription;
  success$: Subject<any> = new Subject<any>();

  constructor(private databaseService: DatabaseService) { }

  successCallback = (querySnapshot) => {
    const data = [];
    let total = 0;
    querySnapshot.forEach(function (doc) {
      const newItem = Object.assign(doc.data(), { _id: doc.id });
      data.push(newItem);
      total += newItem.cost;
    });
    this.data = {
      items: data,
      total: total
    };
    this.success$.next(this.data);
  }

  listExpenses(forceRemote: boolean) {
    if (this.data && !forceRemote) {
      setTimeout(() => {
        this.success$.next(this.data);
      }, 0);
    } else {
      if (this.data) { delete this.data; }
      if (this.subscription) { this.subscription.unsubscribe(); }
      this.subscription = this.databaseService.listRecords().subscribe(this.successCallback);
    }
    return this.success$;
  }

  deleteRecord(selectedRecord) {
    return this.databaseService.deleteRecord(selectedRecord);
  }

  userRecords(): any {
    return this.databaseService.listRecordsByUser().then(function (results) {
      if (results.empty) {
        console.log('No documents found!');
        return {};
      } else {
        const records = [];
        let total = 0;
        results.forEach(function (doc) {
          total += doc.data().cost;
          records.push(doc.data());
        });
        return { records, total };
      }
    }).catch(function (error) {
      console.log('Error getting documents:', error);
    });
  }
}

