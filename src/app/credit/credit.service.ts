import { Injectable } from '@angular/core';
import { DatabaseService } from '../database.service';
import { Subscription, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CreditService {
  userId: string;
  data: any;
  subscription: Subscription;
  success$: Subject<any> = new Subject<any>();

  constructor(private databaseService: DatabaseService) {  }

  successCallback = (user: any) => {
// tslint:disable-next-line: radix
    this.data = parseInt(user.data().credit);
    this.success$.next(this.data);
  }

  getCredit(userId: string , forceRemote: boolean) {
    userId = 'dh0O30O662416pUW8hX5';
    if (this.data && userId === this.userId && !forceRemote) {
      setTimeout(() => {
        this.success$.next(this.data);
      }, 0);
    } else {
      this.userId = userId;
      if (this.subscription) { this.subscription.unsubscribe(); }
      this.subscription = this.databaseService.getCredit(this.userId).subscribe(this.successCallback);
    }
    return this.success$;
  }
}
