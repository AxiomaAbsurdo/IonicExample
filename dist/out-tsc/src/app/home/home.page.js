import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { LoginService } from './../login/login.service';
import { ChartService } from './../charts/charts.service';
import { DatabaseService } from '../database.service';
import { HomeService } from './home.service';
var HomePage = /** @class */ (function () {
    function HomePage(loginService, chartService, dbService, homeService) {
        this.loginService = loginService;
        this.chartService = chartService;
        this.dbService = dbService;
        this.homeService = homeService;
        this.total = 0;
        this.available = 30000;
    }
    HomePage.prototype.ngOnInit = function () {
        var currentUser = this.homeService.currentUser();
        console.log(currentUser);
    };
    /* NAVEGAR AL LOGIN */
    HomePage.prototype.gotoLogin = function () {
        this.loginService.goToLoginState();
    };
    /* NAVEGAR A LOS STATS */
    HomePage.prototype.gotoStats = function () {
        this.chartService.goToStatsState();
    };
    HomePage = tslib_1.__decorate([
        Component({
            selector: 'app-home',
            templateUrl: 'home.page.html',
            styleUrls: ['home.page.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [LoginService, ChartService, DatabaseService,
            HomeService])
    ], HomePage);
    return HomePage;
}());
export { HomePage };
//# sourceMappingURL=home.page.js.map