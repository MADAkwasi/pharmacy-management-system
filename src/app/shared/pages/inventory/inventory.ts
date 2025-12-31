import { mockMedications } from '@shared/constants/medication';
import { ChangeDetectionStrategy, Component, computed, signal } from '@angular/core';
import { Button } from '@shared/components/button/button';
import { InventoryTable } from '@shared/components/inventory-table/inventory-table';
import { TextInput } from '@shared/components/text-input/text-input';
import { Funnel, LucideAngularModule, Plus, Search } from 'lucide-angular';
import { Modal } from '@shared/components/modal/modal';
import { SelectInput } from '@shared/components/select-input/select-input';
import { MedicationForm } from '@shared/components/medication-form/medication-form';

@Component({
  selector: 'app-inventory',
  imports: [
    Button,
    LucideAngularModule,
    TextInput,
    InventoryTable,
    Modal,
    SelectInput,
    MedicationForm,
  ],
  templateUrl: './inventory.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Inventory {
  protected readonly icons = { Plus, Search, Funnel };
  protected readonly isModalOpen = signal(false);
  protected readonly categories = computed(() => [
    { label: 'All Categories', value: 'all' },
    ...new Set(
      mockMedications.map((med) => ({
        label: med.category,
        value: med.category.replace(' ', '-').toLowerCase(),
      }))
    ),
  ]);
}
