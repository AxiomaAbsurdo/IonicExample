import { ExpensesListService } from './expenses-list.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-expenses-list',
  templateUrl: './expenses-list.page.html',
  styleUrls: ['./expenses-list.page.scss'],
})
export class ExpensesListPage implements OnInit {
  expenses: any;
  expensesSubscription: any;

  constructor( private expensesListService: ExpensesListService) { }

  ngOnInit() {
    this.expensesSubscription = this.expensesListService.listExpenses(false).subscribe((response: any) => {
      this.expenses = response.items;
    });
  }

  delete(item) {
    this.expensesListService.deleteRecord(item)
    .then(() => {
      console.log('Document successfully deleted!');
      this.expensesListService.listExpenses(true);
      // this.getusrExpensesObs(true);
    })
    .catch(function (error) {
      console.error('Error deleting document: ', error);
    });
  }
}
