import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TotalizerComponent } from './totalizer.component';

describe('TotalizerComponent', () => {
  let component: TotalizerComponent;
  let fixture: ComponentFixture<TotalizerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TotalizerComponent ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TotalizerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
