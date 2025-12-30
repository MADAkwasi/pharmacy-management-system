import { CommonModule, CurrencyPipe, DatePipe } from '@angular/common';
import { Component, input } from '@angular/core';
import { mockMedications } from '@shared/constants/medication';
import { inventoryTableColumn } from '@shared/constants/table';
import { LucideAngularModule, Pencil, Trash2, TriangleAlert } from 'lucide-angular';
import { Button } from '../button/button';

@Component({
  selector: 'app-table',
  imports: [LucideAngularModule, CommonModule, DatePipe, CurrencyPipe, Button],
  templateUrl: './table.html',
})
export class Table {
  protected readonly headCols = input(inventoryTableColumn);
  protected readonly medications = mockMedications;
  protected readonly icons = { TriangleAlert, Pencil, Trash2 };
}
