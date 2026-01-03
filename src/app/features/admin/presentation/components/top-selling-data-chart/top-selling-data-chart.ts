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
  selector: 'app-top-selling-data-chart',
  imports: [ChartComponent],
  templateUrl: './top-selling-data-chart.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TopSellingDataChart implements OnInit {
  private readonly saleService = inject(Sale);
  private readonly medications = computed(() => this.saleService.medications().slice(0, 10));
  protected readonly chartOptions = signal<Partial<ChartOptions> | null>(null);

  ngOnInit(): void {
    this.chartOptions.set({
      series: [
        {
          name: 'Quantity sold',
          data: [400, 430, 448, 470, 540, 580, 690, 1100, 1200, 1380],
        },
      ],
      chart: {
        type: 'bar',
        height: 350,
      },
      plotOptions: {
        bar: {
          horizontal: true,
        },
      },
      dataLabels: {
        enabled: false,
      },
      xaxis: {
        categories: this.medications(),
      },
      title: {
        text: 'Top Selling Items',
        style: {
          fontSize: '20px',
        },
      },
    });
  }
}
