import { TestBed } from '@angular/core/testing';

import { AddExpensesService } from './add-expenses.service';

describe('AddExpensesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AddExpensesService = TestBed.get(AddExpensesService);
    expect(service).toBeTruthy();
  });
});
