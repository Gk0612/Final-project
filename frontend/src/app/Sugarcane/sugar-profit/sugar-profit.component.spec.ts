import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SugarProfitComponent } from './sugar-profit.component';

describe('SugarProfitComponent', () => {
  let component: SugarProfitComponent;
  let fixture: ComponentFixture<SugarProfitComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SugarProfitComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SugarProfitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
