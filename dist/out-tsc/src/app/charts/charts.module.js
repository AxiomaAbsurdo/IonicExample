import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { ChartsPage } from './charts.page';
var routes = [
    {
        path: '',
        component: ChartsPage
    }
];
var ChartsPageModule = /** @class */ (function () {
    function ChartsPageModule() {
    }
    ChartsPageModule = tslib_1.__decorate([
        NgModule({
            imports: [
                CommonModule,
                FormsModule,
                IonicModule,
                RouterModule.forChild(routes)
            ],
            declarations: [ChartsPage]
        })
    ], ChartsPageModule);
    return ChartsPageModule;
}());
export { ChartsPageModule };
//# sourceMappingURL=charts.module.js.map