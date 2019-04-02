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

  constructor(private databaseService: DatabaseService) {  }

  successCallback = (querySnapshot) => {
    const data = [];
    let total = 0;
    querySnapshot.forEach(function (doc) {
      // doc.data() is never undefined for query doc snapshots
      const newItem = Object.assign(doc.data(), { _id: doc.id });
      data.push(newItem);
      total += newItem.cost;
      console.log(doc.id, ' => ', doc.data());
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
      this.subscription = this.databaseService.listRecords().subscribe(this.successCallback);
    }
    return this.success$;
  }

  deleteRecord(selectedRecord){
    return this.databaseService.deleteRecord(selectedRecord);
  }
}

