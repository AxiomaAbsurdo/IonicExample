import { TestBed } from '@angular/core/testing';

import { ExpensesListService } from './expenses-list.service';

describe('ExpensesListService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ExpensesListService = TestBed.get(ExpensesListService);
    expect(service).toBeTruthy();
  });
});
