import { LoginService } from './login.service';

import { Component, OnInit } from '@angular/core';
import { HomeService } from '../home/home.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(private loginService: LoginService, private homeService: HomeService) { }

  goToHomeState = this.homeService.goToHomeState;

  ngOnInit() {
  }
 
}
