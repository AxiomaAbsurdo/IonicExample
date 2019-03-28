import { Component } from '@angular/core';
import { LoginService } from './../login/login.service';
import { ChartService } from './../charts/charts.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  constructor( private loginService: LoginService, private chartService: ChartService ){ }

  goToLoginState = this.loginService.goToLoginState;
  
  goToStatsState = this.chartService.goToStatsState;
}
