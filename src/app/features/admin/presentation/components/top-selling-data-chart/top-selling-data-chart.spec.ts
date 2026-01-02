import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopSellingDataChart } from './top-selling-data-chart';

describe('TopSellingDataChart', () => {
  let component: TopSellingDataChart;
  let fixture: ComponentFixture<TopSellingDataChart>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TopSellingDataChart]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TopSellingDataChart);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
