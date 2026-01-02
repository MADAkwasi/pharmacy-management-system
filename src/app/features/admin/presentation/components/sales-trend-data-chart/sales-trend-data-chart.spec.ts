import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SalesTrendDataChart } from './sales-trend-data-chart';

describe('SalesTrendDataChart', () => {
  let component: SalesTrendDataChart;
  let fixture: ComponentFixture<SalesTrendDataChart>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SalesTrendDataChart]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SalesTrendDataChart);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
