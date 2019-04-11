import { ExpensesListService } from './expenses-list.service';
import { Component, OnInit } from '@angular/core';
import { Query } from 'angularfire2/firestore';

@Component({
  selector: 'app-expenses-list',
  templateUrl: './expenses-list.page.html',
  styleUrls: ['./expenses-list.page.scss'],
})
export class ExpensesListPage implements OnInit {
  expenses: any;
  expensesSubscription: any;
  records: any;

  constructor(private expensesListService: ExpensesListService) { }

  ngOnInit() {
    this.userExpenses();
  }

  userExpenses() {
    return this.expensesListService.userRecords().then((expenses) => {
      this.expenses = expenses.records;
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
