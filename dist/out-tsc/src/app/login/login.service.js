import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { DatabaseService } from '../database.service';
var LoginService = /** @class */ (function () {
    function LoginService(router, dbService) {
        var _this = this;
        this.router = router;
        this.dbService = dbService;
        this.goToLoginState = function () {
            _this.router.navigate(['login']);
        };
    }
    LoginService.prototype.userLogin = function (email, pass) {
        return this.dbService.login(email, pass);
    };
    LoginService = tslib_1.__decorate([
        Injectable({ providedIn: 'root' }),
        tslib_1.__metadata("design:paramtypes", [Router, DatabaseService])
    ], LoginService);
    return LoginService;
}());
export { LoginService };
//# sourceMappingURL=login.service.js.map