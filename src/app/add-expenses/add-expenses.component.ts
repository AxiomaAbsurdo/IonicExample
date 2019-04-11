import { AddExpensesService } from './add-expenses.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ExpensesListService } from '../expenses-list/expenses-list.service';

@Component({
  selector: 'app-add-expenses',
  templateUrl: './add-expenses.component.html',
  styleUrls: ['./add-expenses.component.scss'],
})
export class AddExpensesComponent implements OnInit {

  available: number;

  form = this.fb.group({
    details: ['', [Validators.required]],
    cost: [undefined, [Validators.required, Validators.min(1), Validators.max(this.available)]]
  });

  constructor(private fb: FormBuilder, private addExpenses: AddExpensesService, private expensesListService: ExpensesListService) { }

  ngOnInit() {
    this.form = this.fb.group({
      details: ['', [Validators.required]],
      cost: [undefined, [Validators.required, Validators.min(1), Validators.max(this.available)]]
    });
  }

  /* OBTENER INPUTS*/
  get details() {
    return this.form.get('details');
  }

  get cost() {
    return this.form.get('cost');
  }

  /* ADD RECORDS */
  addRecord(newRecord) {
    if (!this.form.errors) {
      this.addExpenses.add(newRecord)
        .then(() => {
          console.log('Document successfully written!');
          this.expensesListService.listExpenses(true);
        })
        .catch(function (error) {
          console.error('Error writing document: ', error);
        });
    }
  }

}
