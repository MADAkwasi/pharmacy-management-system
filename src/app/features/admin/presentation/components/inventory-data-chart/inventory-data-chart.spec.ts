import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InventoryDataChart } from './inventory-data-chart';

describe('InventoryDataChart', () => {
  let component: InventoryDataChart;
  let fixture: ComponentFixture<InventoryDataChart>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InventoryDataChart]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InventoryDataChart);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
