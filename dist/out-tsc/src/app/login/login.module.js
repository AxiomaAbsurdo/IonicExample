import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { IonicModule } from '@ionic/angular';
import { LoginPage } from './login.page';
import { AngularFireModule } from 'angularfire2';
import { environment } from 'src/environments/environment';
import { DatabaseService } from '../database.service';
var routes = [
    {
        path: '',
        component: LoginPage
    }
];
var LoginPageModule = /** @class */ (function () {
    function LoginPageModule() {
    }
    LoginPageModule = tslib_1.__decorate([
        NgModule({
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
    ], LoginPageModule);
    return LoginPageModule;
}());
export { LoginPageModule };
//# sourceMappingURL=login.module.js.map