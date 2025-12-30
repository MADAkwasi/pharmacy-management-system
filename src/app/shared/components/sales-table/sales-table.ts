import { Component } from '@angular/core';
import { Button } from '../button/button';
import { CreditCard, Eye, HandCoins, LucideAngularModule, Smartphone } from 'lucide-angular';
import { salesTableColumn } from '@shared/constants/table';
import { mockSales } from '@shared/constants/sales';
import { CurrencyPipe, DatePipe } from '@angular/common';

@Component({
  selector: 'app-sales-table',
  imports: [Button, LucideAngularModule, CurrencyPipe, DatePipe],
  templateUrl: './sales-table.html',
})
export class SalesTable {
  protected readonly headCols = salesTableColumn;
  protected readonly sales = mockSales;
  protected readonly icons = { Eye, CreditCard, Smartphone, HandCoins };
}
