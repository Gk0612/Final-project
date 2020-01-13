import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RiceBalanceComponent } from './rice-balance.component';

describe('RiceBalanceComponent', () => {
  let component: RiceBalanceComponent;
  let fixture: ComponentFixture<RiceBalanceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RiceBalanceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RiceBalanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
