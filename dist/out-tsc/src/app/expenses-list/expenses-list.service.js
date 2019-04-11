import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { DatabaseService } from '../database.service';
// import { Query } from 'angularfire2/firestore';
var ExpensesListService = /** @class */ (function () {
    function ExpensesListService(databaseService) {
        var _this = this;
        this.databaseService = databaseService;
        this.success$ = new Subject();
        this.successCallback = function (querySnapshot) {
            var data = [];
            var total = 0;
            querySnapshot.forEach(function (doc) {
                // doc.data() is never undefined for query doc snapshots
                var newItem = Object.assign(doc.data(), { _id: doc.id });
                data.push(newItem);
                total += newItem.cost;
                //console.log(doc.id, ' => ', doc.data());
            });
            _this.data = {
                items: data,
                total: total
            };
            _this.success$.next(_this.data);
        };
    }
    ExpensesListService.prototype.listExpenses = function (forceRemote) {
        var _this = this;
        if (this.data && !forceRemote) {
            setTimeout(function () {
                _this.success$.next(_this.data);
            }, 0);
        }
        else {
            if (this.data) {
                delete this.data;
            }
            if (this.subscription) {
                this.subscription.unsubscribe();
            }
            this.subscription = this.databaseService.listRecords().subscribe(this.successCallback);
        }
        return this.success$;
    };
    ExpensesListService.prototype.deleteRecord = function (selectedRecord) {
        return this.databaseService.deleteRecord(selectedRecord);
    };
    ExpensesListService.prototype.userRecords = function () {
        return this.databaseService.listRecordsByUser().then(function (results) {
            if (results.empty) {
                console.log('No documents found!');
                return {};
            }
            else {
                var records_1 = [];
                var total_1 = 0;
                // go through all results
                results.forEach(function (doc) {
                    total_1 += doc.data().cost;
                    // console.log("Document data:", doc.data());
                    records_1.push(doc.data());
                });
                // or if you only want the first result you can also do something like this:
                console.log('Document data:', results.docs[0].data());
                return { records: records_1, total: total_1 };
            }
        }).catch(function (error) {
            console.log('Error getting documents:', error);
        });
    };
    ExpensesListService = tslib_1.__decorate([
        Injectable({
            providedIn: 'root'
        }),
        tslib_1.__metadata("design:paramtypes", [DatabaseService])
    ], ExpensesListService);
    return ExpensesListService;
}());
export { ExpensesListService };
//# sourceMappingURL=expenses-list.service.js.map