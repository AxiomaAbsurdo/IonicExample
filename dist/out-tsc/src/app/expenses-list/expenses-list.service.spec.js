import { TestBed } from '@angular/core/testing';
import { ExpensesListService } from './expenses-list.service';
describe('ExpensesListService', function () {
    beforeEach(function () { return TestBed.configureTestingModule({}); });
    it('should be created', function () {
        var service = TestBed.get(ExpensesListService);
        expect(service).toBeTruthy();
    });
});
//# sourceMappingURL=expenses-list.service.spec.js.map