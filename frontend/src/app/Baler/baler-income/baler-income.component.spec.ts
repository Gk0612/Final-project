import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BalerIncomeComponent } from './baler-income.component';

describe('BalerIncomeComponent', () => {
  let component: BalerIncomeComponent;
  let fixture: ComponentFixture<BalerIncomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BalerIncomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BalerIncomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
