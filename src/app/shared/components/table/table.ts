import { Component, input } from '@angular/core';
import { mockMedications } from '@shared/constants/medication';
import { inventoryTableColumn } from '@shared/constants/table';

@Component({
  selector: 'app-table',
  imports: [],
  templateUrl: './table.html',
})
export class Table {
  protected readonly headCols = input(inventoryTableColumn);
  protected readonly medications = mockMedications;
}
