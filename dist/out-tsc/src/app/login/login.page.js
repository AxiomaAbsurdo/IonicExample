import * as tslib_1 from "tslib";
import { LoginService } from './login.service';
import { Component } from '@angular/core';
import { HomeService } from '../home/home.service';
import { DatabaseService } from '../database.service';
import { FormBuilder, Validators } from '@angular/forms';
import { ToastController } from '@ionic/angular';
var LoginPage = /** @class */ (function () {
    function LoginPage(fb, loginService, homeService, dbService, toastController) {
        this.fb = fb;
        this.loginService = loginService;
        this.homeService = homeService;
        this.dbService = dbService;
        this.toastController = toastController;
        this.form = this.fb.group({
            userName: ['', [Validators.required]],
            userPass: [undefined, [Validators.required]]
        });
    }
    // goToHomeState = this.homeService.goToHomeState;
    LoginPage.prototype.ngOnInit = function () {
        this.form = this.fb.group({
            email: ['', [Validators.required, Validators.email]],
            password: [undefined, [Validators.required, Validators.min(1)]]
        });
        // this.items = this.dbService.getItems();
    };
    Object.defineProperty(LoginPage.prototype, "email", {
        /* OBTENER INPUTS DEL LOGIN*/
        get: function () {
            return this.form.get('email');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LoginPage.prototype, "password", {
        get: function () {
            return this.form.get('password');
        },
        enumerable: true,
        configurable: true
    });
    LoginPage.prototype.userLogin = function () {
        var _this = this;
        this.loginService.userLogin(this.form.value.email, this.form.value.password).
            then(this.homeService.goToHomeState).catch(function (error) {
            _this.presentToast();
            console.log('error', error);
        });
    };
    LoginPage.prototype.presentToast = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var toast;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.toastController.create({
                            message: 'Datos de acceso incorrectos',
                            duration: 2000
                        })];
                    case 1:
                        toast = _a.sent();
                        toast.present();
                        return [2 /*return*/];
                }
            });
        });
    };
    LoginPage = tslib_1.__decorate([
        Component({
            selector: 'app-login',
            templateUrl: './login.page.html',
            styleUrls: ['./login.page.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [FormBuilder, LoginService, HomeService,
            DatabaseService, ToastController])
    ], LoginPage);
    return LoginPage;
}());
export { LoginPage };
//# sourceMappingURL=login.page.js.map