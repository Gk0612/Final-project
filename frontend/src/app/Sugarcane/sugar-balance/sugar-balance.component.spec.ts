import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SugarBalanceComponent } from './sugar-balance.component';

describe('SugarBalanceComponent', () => {
  let component: SugarBalanceComponent;
  let fixture: ComponentFixture<SugarBalanceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SugarBalanceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SugarBalanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
