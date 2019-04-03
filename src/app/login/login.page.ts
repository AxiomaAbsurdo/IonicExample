import { LoginService } from './login.service';

import { Component, OnInit } from '@angular/core';
import { HomeService } from '../home/home.service';
import { DatabaseService } from '../database.service';
import { FormBuilder, Validators } from '@angular/forms';
import { functions } from 'firebase';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  form = this.fb.group({
    userName: ['', [Validators.required]],
    userPass: [undefined, [Validators.required]]
  });

  constructor(private fb: FormBuilder, private loginService: LoginService, private homeService: HomeService,
    private dbService: DatabaseService) { }

  // goToHomeState = this.homeService.goToHomeState;

  ngOnInit() {
    this.form = this.fb.group({
      userName: ['', [Validators.required]],
      userPass: [undefined, [Validators.required, Validators.min(1)]]
    });
    // this.items = this.dbService.getItems();
  }

  /* OBTENER INPUTS DEL LOGIN*/
  get userName() {
    return this.form.get('userName');
  }

  get userPass() {
    return this.form.get('userPass');
  }

  userLogin() {
    this.loginService.userLogin(this.form.value.userName, this.form.value.userPass).
      then(this.homeService.goToHomeState).catch(() => {
        console.log('fallo');
      });

  }
}
