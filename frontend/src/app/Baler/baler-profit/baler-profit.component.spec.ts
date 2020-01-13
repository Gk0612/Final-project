import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BalerProfitComponent } from './baler-profit.component';

describe('BalerProfitComponent', () => {
  let component: BalerProfitComponent;
  let fixture: ComponentFixture<BalerProfitComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BalerProfitComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BalerProfitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
