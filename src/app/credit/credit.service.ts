import { Injectable } from '@angular/core';
import { DatabaseService } from '../database.service';
import { Subscription, Subject } from 'rxjs';
import { QuerySnapshot } from 'angularfire2/firestore';

@Injectable({
  providedIn: 'root'
})
export class CreditService {
  userId: string;
  data: any;
  subscription: Subscription;
  success$: Subject<any> = new Subject<any>();

  constructor(private databaseService: DatabaseService) { }

  successCallback = (querySnapshot: QuerySnapshot<any>) => {
    let credit: number;
    querySnapshot.forEach(function (doc) {
      credit = doc.data().credit;
    });
    this.data = credit;
    this.success$.next(this.data);
  }

  getCredit(userId: string, forceRemote: boolean) {
    userId = this.databaseService.currentUser;
    if (this.data && userId === this.userId && !forceRemote) {
      setTimeout(() => {
        this.success$.next(this.data);
      }, 0);
    } else {
      this.userId = userId;
      if (this.subscription) { this.subscription.unsubscribe(); }
      this.databaseService.getCredit(this.userId).then((data) => {
        this.successCallback(data);
      });
    }
    return this.success$;
  }
}
