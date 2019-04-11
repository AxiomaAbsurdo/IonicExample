import * as tslib_1 from "tslib";
import { HomeService } from './../home/home.service';
import { Component } from '@angular/core';
var ChartsPage = /** @class */ (function () {
    function ChartsPage(homeService) {
        this.homeService = homeService;
        this.goToHomeState = this.homeService.goToHomeState;
    }
    ChartsPage.prototype.ngOnInit = function () {
    };
    ChartsPage = tslib_1.__decorate([
        Component({
            selector: 'app-charts',
            templateUrl: './charts.page.html',
            styleUrls: ['./charts.page.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [HomeService])
    ], ChartsPage);
    return ChartsPage;
}());
export { ChartsPage };
//# sourceMappingURL=charts.page.js.map