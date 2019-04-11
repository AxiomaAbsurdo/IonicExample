import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { DatabaseService } from '../database.service';
var HomeService = /** @class */ (function () {
    function HomeService(router, dbService) {
        var _this = this;
        this.router = router;
        this.dbService = dbService;
        this.goToHomeState = function () {
            _this.router.navigate(['home']);
        };
    }
    HomeService.prototype.currentUser = function () {
        return this.dbService.currentUser;
    };
    HomeService = tslib_1.__decorate([
        Injectable({ providedIn: 'root' }),
        tslib_1.__metadata("design:paramtypes", [Router, DatabaseService])
    ], HomeService);
    return HomeService;
}());
export { HomeService };
//# sourceMappingURL=home.service.js.map