import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { DatabaseService } from '../database.service';
var AddExpensesService = /** @class */ (function () {
    function AddExpensesService(dbService) {
        var _this = this;
        this.dbService = dbService;
        /*OBTENGO EL USUARIO ANTES DE AGREGAR EL NUEGO GASTO */
        /* AGREGAR */
        this.add = function (item) {
            item = Object.assign(item, { 'addedBy': _this.dbService.currentUser });
            return _this.dbService.addRecord(item);
        };
    }
    AddExpensesService = tslib_1.__decorate([
        Injectable({
            providedIn: 'root'
        }),
        tslib_1.__metadata("design:paramtypes", [DatabaseService])
    ], AddExpensesService);
    return AddExpensesService;
}());
export { AddExpensesService };
//# sourceMappingURL=add-expenses.service.js.map