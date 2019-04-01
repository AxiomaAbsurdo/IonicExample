import { Component, OnInit } from '@angular/core';
import { LoginService } from './../login/login.service';
import { ChartService } from './../charts/charts.service';
import { DatabaseService } from '../database.service';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  expenses: any;
  form = this.fb.group({
    details: ['', [Validators.required]],
    cost: [undefined, [Validators.required, Validators.min(1)]]
  });

  constructor(private loginService: LoginService, private chartService: ChartService, private dbService: DatabaseService,
    private fb: FormBuilder) { }

  ngOnInit() {
    this.expenses = this.dbService.getusrExpensesObs(false);
  }

  /* BORRAR */
  delete = (item: any) => {
    this.dbService.deleteRecord(item);
  }

  /* AGREGAR */
  add = (item: any) => {
    if (!this.form.errors) {
      this.dbService.addRecord(item);
    }
  }

  /* OBTENER INPUTS*/
  get details() {
    return this.form.get('details');
  }

  get cost() {
    return this.form.get('cost');
  }

  /* NAVEGAR AL LOGIN */
  gotoLogin() {
    this.loginService.goToLoginState();
  }

  /* NAVEGAR A LOS STATS */
  gotoStats() {
    this.chartService.goToStatsState();
  }

}
