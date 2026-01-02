import { ApexNonAxisChartSeries, ApexResponsive, ApexChart } from 'ng-apexcharts';

export interface ChartOptions {
  series: ApexNonAxisChartSeries;
  chart: ApexChart;
  responsive: ApexResponsive[];
  xaxis: ApexXAxis;
  stroke: ApexStroke;
  tooltip: ApexTooltip;
  dataLabels: ApexDataLabels;
  title: {
    text: string;
    style: Record<string, string>;
  };
  plotOptions: {
    bar: Record<string, string | boolean>;
  };
  legend: Record<string, string>;
  labels: string[];
}
