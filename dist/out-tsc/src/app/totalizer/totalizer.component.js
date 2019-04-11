import * as tslib_1 from "tslib";
import { CreditService } from '../credit/credit.service';
import { ExpensesListService } from './../expenses-list/expenses-list.service';
import { Component } from '@angular/core';
var TotalizerComponent = /** @class */ (function () {
    function TotalizerComponent(expensesListService, creditService) {
        var _this = this;
        this.expensesListService = expensesListService;
        this.creditService = creditService;
        this.total = 0;
        this.getAvailable = function () {
            return _this.available - _this.total;
        };
    }
    TotalizerComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.expensesListService.userRecords().then(function (expenses) {
            _this.total = expenses.total;
        });
        this.creditSubscription = this.creditService.getCredit('', false).subscribe(function (credit) {
            console.log(credit);
            _this.credit = credit;
        });
    };
    TotalizerComponent.prototype.ngOnDestroy = function () {
        this.expensesSubscription.unsubscribe();
        this.creditSubscription.unsubscribe();
    };
    TotalizerComponent = tslib_1.__decorate([
        Component({
            selector: 'app-totalizer',
            templateUrl: './totalizer.component.html',
            styleUrls: ['./totalizer.component.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [ExpensesListService, CreditService])
    ], TotalizerComponent);
    return TotalizerComponent;
}());
export { TotalizerComponent };
//# sourceMappingURL=totalizer.component.js.map