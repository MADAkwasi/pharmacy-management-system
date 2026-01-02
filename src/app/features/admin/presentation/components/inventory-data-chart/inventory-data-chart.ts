import {
  ChangeDetectionStrategy,
  Component,
  computed,
  inject,
  OnInit,
  signal,
} from '@angular/core';
import { Sale } from '@core/services/sale/sale';
import { ChartOptions } from '@shared/models/chart';
import { ChartComponent } from 'ng-apexcharts';

@Component({
  selector: 'app-inventory-data-chart',
  imports: [ChartComponent],
  templateUrl: './inventory-data-chart.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class InventoryDataChart implements OnInit {
  private readonly saleService = inject(Sale);
  private readonly categories = computed(() => [
    ...new Set(this.saleService.medications().map((med) => med.category)),
  ]);
  protected readonly chartOptions = signal<Partial<ChartOptions> | null>(null);

  ngOnInit(): void {
    this.chartOptions.set({
      series: [44, 55, 13, 43, 22],
      chart: {
        type: 'donut',
      },
      labels: this.categories(),
      title: {
        text: 'Inventory By Category',
        style: {
          fontSize: '20px',
        },
      },
      legend: {
        position: 'bottom',
      },
      dataLabels: {
        enabled: false,
      },
    });
  }
}
