import { Component } from '@angular/core';
import { InventoryDataChart } from '../../components/inventory-data-chart/inventory-data-chart';
import { SalesTrendDataChart } from '../../components/sales-trend-data-chart/sales-trend-data-chart';
import { TopSellingDataChart } from '../../components/top-selling-data-chart/top-selling-data-chart';

@Component({
  selector: 'app-reports',
  imports: [InventoryDataChart, SalesTrendDataChart, TopSellingDataChart],
  templateUrl: './reports.html',
})
export class Reports {}
