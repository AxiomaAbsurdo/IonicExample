import { LoginService } from './login.service';

import { Component, OnInit  } from '@angular/core';
import { HomeService } from '../home/home.service';
import { DatabaseService } from '../database.service';
import { FormBuilder, Validators } from '@angular/forms';

import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  error: any;

  form = this.fb.group({
    userName: ['', [Validators.required]],
    userPass: [undefined, [Validators.required]]
  });

  constructor(private fb: FormBuilder, private loginService: LoginService, private homeService: HomeService,
    private dbService: DatabaseService, public toastController: ToastController) { }

  // goToHomeState = this.homeService.goToHomeState;

  ngOnInit() {
    this.form = this.fb.group({
      email: ['', [Validators.required,Validators.email]],
      password: [undefined, [Validators.required, Validators.min(1)]]
    });
    // this.items = this.dbService.getItems();
  }

  /* OBTENER INPUTS DEL LOGIN*/
  get email() {
    return this.form.get('email');
  }

  get password() {
    return this.form.get('password');
  }

  userLogin() {
    this.loginService.userLogin(this.form.value.email, this.form.value.password).
      then(this.homeService.goToHomeState).catch((error) => {
        this.presentToast();
        console.log('error', error);
      });
  }

  async presentToast() {
    const toast = await this.toastController.create({
      message: 'Datos de acceso incorrectos',
      duration: 2000
    });
    toast.present();
  }

  // async presentToastWithOptions() {
  //   const toast = await this.toastController.create({
  //     message: 'Click to Close',
  //     showCloseButton: true,
  //     position: 'top',
  //     closeButtonText: 'Done'
  //   });
  //   toast.present();
  // }
}
