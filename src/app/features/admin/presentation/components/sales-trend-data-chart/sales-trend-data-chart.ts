import { Component, OnInit, signal } from '@angular/core';
import { ChartOptions } from '@shared/models/chart';
import { ChartComponent } from 'ng-apexcharts';

@Component({
  selector: 'app-sales-trend-data-chart',
  imports: [ChartComponent],
  templateUrl: './sales-trend-data-chart.html',
})
export class SalesTrendDataChart implements OnInit {
  protected readonly chartOptions = signal<Partial<ChartOptions> | null>(null);

  ngOnInit(): void {
    this.chartOptions.set({
      series: [
        {
          name: 'Sales (GHC)',
          data: [31, 40, 28, 51, 42, 109, 100],
        },
      ],
      chart: {
        height: 350,
        type: 'area',
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        curve: 'smooth',
        colors: ['#30b5a6'],
      },
      xaxis: {
        categories: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
      },
      title: {
        text: 'Sales Trend (Last 7 days)',
        style: {
          fontSize: '20px',
        },
      },
    });
  }
}
