import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RiceProfitComponent } from './rice-profit.component';

describe('RiceProfitComponent', () => {
  let component: RiceProfitComponent;
  let fixture: ComponentFixture<RiceProfitComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RiceProfitComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RiceProfitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
