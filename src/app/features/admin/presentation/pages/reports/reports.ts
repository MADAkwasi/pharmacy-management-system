import { Component, computed, signal } from '@angular/core';
import { InventoryDataChart } from '../../components/inventory-data-chart/inventory-data-chart';
import { SalesTrendDataChart } from '../../components/sales-trend-data-chart/sales-trend-data-chart';
import { TopSellingDataChart } from '../../components/top-selling-data-chart/top-selling-data-chart';
import { ReportCard } from '../../components/report-card/report-card';
import { mockMedications } from '@shared/constants/medication';
import { BadgeCent, Clock, TrendingUp, TriangleAlert } from 'lucide-angular';

@Component({
  selector: 'app-reports',
  imports: [InventoryDataChart, SalesTrendDataChart, TopSellingDataChart, ReportCard],
  templateUrl: './reports.html',
})
export class Reports {
  private readonly medications = signal(mockMedications);
  protected readonly icons = { BadgeCent, TrendingUp, Clock, TriangleAlert };
  protected readonly lowStocks = computed(() =>
    this.medications().filter((med) => med.quantity < med.minStock)
  );
  protected readonly expiringSoon = computed(() => {
    const now = Date.now();
    const in30Days = now + 30 * 24 * 60 * 60 * 1000;

    return this.medications().filter((med) => {
      const expiry = new Date(med.expiryDate).getTime();
      return expiry >= now && expiry <= in30Days;
    });
  });
  protected readonly expired = computed(() =>
    this.medications().filter((med) => new Date(med.expiryDate).getTime() < Date.now())
  );
}
