import { Component, OnInit, signal } from '@angular/core';
import { mockMedications } from '@shared/constants/medication';
import { ChartOptions } from '@shared/models/chart';
import { ChartComponent } from 'ng-apexcharts';

@Component({
  selector: 'app-inventory-data-chart',
  imports: [ChartComponent],
  templateUrl: './inventory-data-chart.html',
})
export class InventoryDataChart implements OnInit {
  private readonly categories = signal([...new Set(mockMedications.map((med) => med.category))]);
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
