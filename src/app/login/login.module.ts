import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { AngularFireAuthModule } from 'angularfire2/auth';

import { IonicModule } from '@ionic/angular';

import { LoginPage } from './login.page';
import { AngularFireModule } from 'angularfire2';
import { environment } from 'src/environments/environment';
import { DatabaseService } from '../database.service';

const routes: Routes = [
  {
    path: '',
    component: LoginPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  providers: [DatabaseService],
  declarations: [LoginPage]
})
export class LoginPageModule {}
