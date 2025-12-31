import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { Button } from '@shared/components/button/button';
import { Modal } from '@shared/components/modal/modal';
import { SalesForm } from '@shared/components/sales-form/sales-form';
import { SalesTable } from '@shared/components/sales-table/sales-table';
import { TextInput } from '@shared/components/text-input/text-input';
import { LucideAngularModule, Plus, Search } from 'lucide-angular';

@Component({
  selector: 'app-sales-history',
  imports: [LucideAngularModule, Button, TextInput, SalesTable, Modal, SalesForm],
  templateUrl: './sales-history.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SalesHistory {
  protected readonly isModalOpen = signal(false);
  protected readonly icons = { Plus, Search };
}
