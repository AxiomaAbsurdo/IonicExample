import * as tslib_1 from "tslib";
import { AddExpensesService } from './add-expenses.service';
import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ExpensesListService } from '../expenses-list/expenses-list.service';
var AddExpensesComponent = /** @class */ (function () {
    function AddExpensesComponent(fb, addExpenses, expensesListService) {
        this.fb = fb;
        this.addExpenses = addExpenses;
        this.expensesListService = expensesListService;
        this.form = this.fb.group({
            details: ['', [Validators.required]],
            cost: [undefined, [Validators.required, Validators.min(1), Validators.max(this.available)]]
        });
    }
    AddExpensesComponent.prototype.ngOnInit = function () {
        this.form = this.fb.group({
            details: ['', [Validators.required]],
            cost: [undefined, [Validators.required, Validators.min(1), Validators.max(this.available)]]
        });
    };
    Object.defineProperty(AddExpensesComponent.prototype, "details", {
        /* OBTENER INPUTS*/
        get: function () {
            return this.form.get('details');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AddExpensesComponent.prototype, "cost", {
        get: function () {
            return this.form.get('cost');
        },
        enumerable: true,
        configurable: true
    });
    /* ADD RECORDS */
    AddExpensesComponent.prototype.addRecord = function (newRecord) {
        var _this = this;
        console.log('entro aca');
        console.log(newRecord);
        if (!this.form.errors) {
            console.log(newRecord);
            this.addExpenses.add(newRecord)
                .then(function () {
                console.log('Document successfully written!');
                _this.expensesListService.listExpenses(true);
                // this.getusrExpensesObs(true);
            })
                .catch(function (error) {
                console.error('Error writing document: ', error);
            });
        }
    };
    AddExpensesComponent = tslib_1.__decorate([
        Component({
            selector: 'app-add-expenses',
            templateUrl: './add-expenses.component.html',
            styleUrls: ['./add-expenses.component.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [FormBuilder, AddExpensesService, ExpensesListService])
    ], AddExpensesComponent);
    return AddExpensesComponent;
}());
export { AddExpensesComponent };
//# sourceMappingURL=add-expenses.component.js.map