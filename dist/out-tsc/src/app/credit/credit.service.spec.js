import { TestBed } from '@angular/core/testing';
import { CreditService } from './credit.service';
describe('CreditService', function () {
    beforeEach(function () { return TestBed.configureTestingModule({}); });
    it('should be created', function () {
        var service = TestBed.get(CreditService);
        expect(service).toBeTruthy();
    });
});
//# sourceMappingURL=credit.service.spec.js.map