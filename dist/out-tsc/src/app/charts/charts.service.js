import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
var ChartService = /** @class */ (function () {
    function ChartService(router) {
        var _this = this;
        this.router = router;
        this.goToStatsState = function () {
            _this.router.navigate(['charts']);
        };
    }
    ChartService = tslib_1.__decorate([
        Injectable({ providedIn: 'root' }),
        tslib_1.__metadata("design:paramtypes", [Router])
    ], ChartService);
    return ChartService;
}());
export { ChartService };
//# sourceMappingURL=charts.service.js.map