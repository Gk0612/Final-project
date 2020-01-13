import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BalerBalanceComponent } from './baler-balance.component';

describe('BalerBalanceComponent', () => {
  let component: BalerBalanceComponent;
  let fixture: ComponentFixture<BalerBalanceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BalerBalanceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BalerBalanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
