import { Component, signal } from '@angular/core';
import { Button } from '../button/button';
import { CreditCard, Eye, HandCoins, LucideAngularModule, Smartphone } from 'lucide-angular';
import { salesTableColumn } from '@shared/constants/table';
import { mockSales } from '@shared/constants/sales';
import { CurrencyPipe, DatePipe } from '@angular/common';
import { Sale } from '@shared/models/sales';
import { Modal } from '../modal/modal';

@Component({
  selector: 'app-sales-table',
  imports: [Button, LucideAngularModule, CurrencyPipe, DatePipe, Modal],
  templateUrl: './sales-table.html',
})
export class SalesTable {
  protected readonly headCols = salesTableColumn;
  protected readonly sales = mockSales;
  protected readonly icons = { Eye, CreditCard, Smartphone, HandCoins };
  protected readonly isDetailsModalOpen = signal(false);
  protected readonly selectedSale = signal<Sale | null>(null);

  protected handleToggleDetailModal(sale?: Sale): void {
    if (sale) {
      this.selectedSale.set(sale);
      this.isDetailsModalOpen.set(true);
    } else {
      this.selectedSale.set(null);
      this.isDetailsModalOpen.set(false);
    }
  }
}
