import { ChangeDetectionStrategy, Component, computed, inject, OnInit } from '@angular/core';
import { InventoryDataChart } from '../../components/inventory-data-chart/inventory-data-chart';
import { SalesTrendDataChart } from '../../components/sales-trend-data-chart/sales-trend-data-chart';
import { TopSellingDataChart } from '../../components/top-selling-data-chart/top-selling-data-chart';
import { ReportCard } from '../../components/report-card/report-card';
import { BadgeCent, Clock, Package, TrendingUp, TriangleAlert } from 'lucide-angular';
import { AuditLogs } from '@shared/components/audit-logs/audit-logs';
import { DatePipe } from '@angular/common';
import { Sale } from '@core/services/sale/sale';
import { mockMedications } from '@shared/constants/medication';

@Component({
  selector: 'app-reports',
  imports: [
    InventoryDataChart,
    SalesTrendDataChart,
    TopSellingDataChart,
    ReportCard,
    AuditLogs,
    DatePipe,
  ],
  templateUrl: './reports.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Reports implements OnInit {
  private readonly saleService = inject(Sale);
  private readonly medications = this.saleService.medications;
  protected readonly icons = { BadgeCent, TrendingUp, Clock, TriangleAlert, Package };
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
  protected readonly expiredLogs = computed(() => [...this.expiringSoon(), ...this.expired()]);

  ngOnInit(): void {
    this.saleService.initMedications(mockMedications);
  }
}
