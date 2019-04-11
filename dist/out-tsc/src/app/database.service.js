import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore';
import { AngularFireAuth } from 'angularfire2/auth';
var DatabaseService = /** @class */ (function () {
    function DatabaseService(db, firebaseAuth) {
        this.db = db;
        this.firebaseAuth = firebaseAuth;
        this.user = firebaseAuth.authState;
    }
    /*BUSCA LA LISTA DE RECORDS */
    DatabaseService.prototype.listRecords = function () {
        return this.db.collection('/expenses').get();
    };
    DatabaseService.prototype.listRecordsByUser = function () {
        var currentLogedUser = this.currentUser;
        return this.db.collection('/expenses').ref.where('addedBy', '==', currentLogedUser).get();
    };
    /* ADD RECORDS */
    DatabaseService.prototype.addRecord = function (item) {
        return this.db.collection('/expenses').add(item);
    };
    /* DELETE RECORDS */
    DatabaseService.prototype.deleteRecord = function (docId) {
        return this.db.collection('/expenses').doc(docId).delete();
    };
    /*CALCULA TOTAL */
    DatabaseService.prototype.totalExpenses = function () {
        var exTotal = 0;
        this.db.collection('/expenses').get().subscribe(function (querySnapshot) {
            querySnapshot.forEach(function (doc) {
                // doc.data() is never undefined for query doc snapshots
                console.log(doc.id, ' => ', doc.data());
                exTotal = exTotal + doc.data().cost;
                console.log(doc.data().cost);
                console.log(exTotal);
            });
        });
    };
    /*OBTENER CREDITO*/
    DatabaseService.prototype.getCredit = function (userId) {
        return this.db.collection('/users').ref.where('uid', '==', userId).get();
    };
    /* LOGIN - AUTENTICAR USUARIO */
    DatabaseService.prototype.login = function (email, password) {
        return this.firebaseAuth
            .auth
            .signInWithEmailAndPassword(email, password);
    };
    Object.defineProperty(DatabaseService.prototype, "currentUser", {
        get: function () {
            return this.firebaseAuth.auth.currentUser.uid;
        },
        enumerable: true,
        configurable: true
    });
    DatabaseService = tslib_1.__decorate([
        Injectable({
            providedIn: 'root'
        }),
        tslib_1.__metadata("design:paramtypes", [AngularFirestore, AngularFireAuth])
    ], DatabaseService);
    return DatabaseService;
}());
export { DatabaseService };
//# sourceMappingURL=database.service.js.map