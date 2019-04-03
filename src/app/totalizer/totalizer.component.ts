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
  available = 30000;

  expensesSubscription: Subscription;
  creditSubscription: Subscription;

  constructor( private expensesListService: ExpensesListService, private creditService: CreditService) { }

  ngOnInit() {
    this.expensesSubscription = this.expensesListService.listExpenses(false).subscribe((response: any) => {
      this.total = response.total;
    });

    this.creditSubscription = this.creditService.getCredit('', false).subscribe((credit: any) => {
      console.log(credit);
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
