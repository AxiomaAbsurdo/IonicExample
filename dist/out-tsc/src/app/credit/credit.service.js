import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { DatabaseService } from '../database.service';
import { Subject } from 'rxjs';
var CreditService = /** @class */ (function () {
    function CreditService(databaseService) {
        var _this = this;
        this.databaseService = databaseService;
        this.success$ = new Subject();
        this.successCallback = function (querySnapshot) {
            // tslint:disable-next-line: radix
            /* querySnapshot.forEach(function (doc) {
              return doc.data().credit;
            }); */
            var credit = querySnapshot[0].data().credit;
            _this.data = credit;
            _this.success$.next(_this.data);
            // console.log('Otro Chamo' , user.data());
            // this.data = parseInt(user.data());
            // this.success$.next(this.data);
        };
    }
    CreditService.prototype.getCredit = function (userId, forceRemote) {
        var _this = this;
        userId = this.databaseService.currentUser;
        console.log('CHAMO', userId);
        if (this.data && userId === this.userId && !forceRemote) {
            setTimeout(function () {
                _this.success$.next(_this.data);
            }, 0);
        }
        else {
            this.userId = userId;
            if (this.subscription) {
                this.subscription.unsubscribe();
            }
            this.databaseService.getCredit(this.userId).then(function (data) {
                _this.successCallback(data);
            });
            ;
        }
        return this.success$;
    };
    CreditService = tslib_1.__decorate([
        Injectable({
            providedIn: 'root'
        }),
        tslib_1.__metadata("design:paramtypes", [DatabaseService])
    ], CreditService);
    return CreditService;
}());
export { CreditService };
//# sourceMappingURL=credit.service.js.map