import { Component, signal } from '@angular/core';
import { Button } from '@shared/components/button/button';
import { SalesTable } from '@shared/components/sales-table/sales-table';
import { TextInput } from '@shared/components/text-input/text-input';
import { LucideAngularModule, Plus, Search } from 'lucide-angular';

@Component({
  selector: 'app-sales-history',
  imports: [LucideAngularModule, Button, TextInput, SalesTable],
  templateUrl: './sales-history.html',
})
export class SalesHistory {
  protected readonly isModalOpen = signal(false);
  protected readonly icons = { Plus, Search };
}
