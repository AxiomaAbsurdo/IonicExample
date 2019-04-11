import * as tslib_1 from "tslib";
import { ExpensesListService } from './expenses-list.service';
import { Component } from '@angular/core';
var ExpensesListPage = /** @class */ (function () {
    function ExpensesListPage(expensesListService) {
        this.expensesListService = expensesListService;
    }
    ExpensesListPage.prototype.ngOnInit = function () {
        this.userExpenses();
    };
    ExpensesListPage.prototype.userExpenses = function () {
        var _this = this;
        return this.expensesListService.userRecords().then(function (expenses) {
            _this.expenses = expenses.records;
        });
    };
    ExpensesListPage.prototype.delete = function (item) {
        var _this = this;
        this.expensesListService.deleteRecord(item)
            .then(function () {
            console.log('Document successfully deleted!');
            _this.expensesListService.listExpenses(true);
            // this.getusrExpensesObs(true);
        })
            .catch(function (error) {
            console.error('Error deleting document: ', error);
        });
    };
    ExpensesListPage = tslib_1.__decorate([
        Component({
            selector: 'app-expenses-list',
            templateUrl: './expenses-list.page.html',
            styleUrls: ['./expenses-list.page.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [ExpensesListService])
    ], ExpensesListPage);
    return ExpensesListPage;
}());
export { ExpensesListPage };
//# sourceMappingURL=expenses-list.page.js.map