import { Component, OnInit } from '@angular/core';
import { LoginService } from './../login/login.service';
import { ChartService } from './../charts/charts.service';
import { DatabaseService } from '../database.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  expenses: any;
  total = 0;
  available = 30000;

  constructor(private loginService: LoginService, private chartService: ChartService, private dbService: DatabaseService) { }

  ngOnInit() { }

  /* NAVEGAR AL LOGIN */
  gotoLogin() {
    this.loginService.goToLoginState();
  }

  /* NAVEGAR A LOS STATS */
  gotoStats() {
    this.chartService.goToStatsState();
  }

}
