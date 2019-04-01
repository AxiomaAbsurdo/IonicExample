import { LoginService } from './login.service';

import { Component, OnInit } from '@angular/core';
import { HomeService } from '../home/home.service';
import { DatabaseService } from '../database.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  userName: string;
  userPass: string;
  items: any;

  constructor(private loginService: LoginService, private homeService: HomeService, private dbService: DatabaseService) { }

  goToHomeState = this.homeService.goToHomeState;

  ngOnInit() {
    // this.items = this.dbService.getItems();
  }

}
