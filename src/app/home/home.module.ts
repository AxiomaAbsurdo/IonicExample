import { ExpensesListPage } from './../expenses-list/expenses-list.page';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { HomePage } from './home.page';
import { AddExpensesComponent } from '../add-expenses/add-expenses.component';
import { TotalizerComponent } from '../totalizer/totalizer.component';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    IonicModule,
    RouterModule.forChild([
      {
        path: '',
        component: HomePage
      }
    ])
  ],
  declarations: [HomePage, ExpensesListPage, AddExpensesComponent, TotalizerComponent]
})
export class HomePageModule {}
