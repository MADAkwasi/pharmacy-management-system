import { CurrencyPipe, DatePipe } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  computed,
  inject,
  OnInit,
  signal,
} from '@angular/core';
import { Sale } from '@core/services/sale/sale';
import { ReportCard } from '@features/admin/presentation/components/report-card/report-card';
import { SalesTrendDataChart } from '@features/admin/presentation/components/sales-trend-data-chart/sales-trend-data-chart';
import { AuditLogs } from '@shared/components/audit-logs/audit-logs';
import { mockMedications } from '@shared/constants/medication';
import { mockSales } from '@shared/constants/sales';
import {
  BadgeCent,
  Clock,
  CreditCard,
  HandCoins,
  LucideAngularModule,
  Pill,
  ReceiptCent,
  ShoppingCart,
  Smartphone,
  TriangleAlert,
  Users,
} from 'lucide-angular';

@Component({
  selector: 'app-home',
  imports: [
    ReportCard,
    SalesTrendDataChart,
    AuditLogs,
    LucideAngularModule,
    DatePipe,
    CurrencyPipe,
  ],
  templateUrl: './home.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Home implements OnInit {
  private readonly saleService = inject(Sale);
  private readonly medications = this.saleService.medications;
  protected readonly icons = {
    BadgeCent,
    TriangleAlert,
    Clock,
    Pill,
    ShoppingCart,
    Users,
    ReceiptCent,
    CreditCard,
    Smartphone,
    HandCoins,
  };
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
  protected readonly sales = signal(mockSales);

  ngOnInit(): void {
    this.saleService.initMedications(mockMedications);
  }

  protected timeAgo(date: string | Date): string {
    const now = new Date();
    const past = new Date(date);

    const seconds = Math.floor((now.getTime() - past.getTime()) / 1000);

    const intervals = [
      { label: 'year', seconds: 31536000 },
      { label: 'month', seconds: 2592000 },
      { label: 'week', seconds: 604800 },
      { label: 'day', seconds: 86400 },
      { label: 'hour', seconds: 3600 },
      { label: 'minute', seconds: 60 },
      { label: 'second', seconds: 1 },
    ];

    for (const interval of intervals) {
      const count = Math.floor(seconds / interval.seconds);
      if (count >= 1) {
        return count === 1 ? `1 ${interval.label} ago` : `${count} ${interval.label}s ago`;
      }
    }

    return 'just now';
  }
}
