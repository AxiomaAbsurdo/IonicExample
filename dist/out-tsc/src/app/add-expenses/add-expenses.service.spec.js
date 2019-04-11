import { TestBed } from '@angular/core/testing';
import { AddExpensesService } from './add-expenses.service';
describe('AddExpensesService', function () {
    beforeEach(function () { return TestBed.configureTestingModule({}); });
    it('should be created', function () {
        var service = TestBed.get(AddExpensesService);
        expect(service).toBeTruthy();
    });
});
//# sourceMappingURL=add-expenses.service.spec.js.map