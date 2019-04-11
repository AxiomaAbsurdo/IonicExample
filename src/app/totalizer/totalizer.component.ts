import { CreditService } from '../credit/credit.service';
import { Subscription } from 'rxjs';
import { ExpensesListService } from './../expenses-list/expenses-list.service';
import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-totalizer',
  templateUrl: './totalizer.component.html',
  styleUrls: ['./totalizer.component.scss'],
})
export class TotalizerComponent implements OnInit, OnDestroy{

  total = 0;
  credit: number;
  available: number;

  expensesSubscription: Subscription;
  creditSubscription: Subscription;

  constructor( private expensesListService: ExpensesListService, private creditService: CreditService) { }

  ngOnInit() {
     this.expensesListService.userRecords().then((expenses) => {
      this.total = expenses.total;
    });

    this.creditSubscription = this.creditService.getCredit('', false).subscribe((credit: any) => {
      this.credit = credit;
    });
   }
  getAvailable = () => {
    return this.available - this.total;
  }

  ngOnDestroy() {
    this.expensesSubscription.unsubscribe();
    this.creditSubscription.unsubscribe();
  }
}
