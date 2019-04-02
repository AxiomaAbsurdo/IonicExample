import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpensesListPage } from './expenses-list.page';

describe('ExpensesListPage', () => {
  let component: ExpensesListPage;
  let fixture: ComponentFixture<ExpensesListPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExpensesListPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExpensesListPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
