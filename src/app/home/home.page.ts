import { Component } from '@angular/core';
import { LoginService } from './../login/login.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  constructor( private LoginService: LoginService){ }

  goToLoginState = this.LoginService.goToLoginState;
}
