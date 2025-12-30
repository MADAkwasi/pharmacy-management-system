import { categoryOptions } from './../../constants/medication';
import { mockMedications } from '@shared/constants/medication';
import { Component, computed, signal } from '@angular/core';
import { Button } from '@shared/components/button/button';
import { Table } from '@shared/components/table/table';
import { TextInput } from '@shared/components/text-input/text-input';
import { Funnel, LucideAngularModule, Plus, Search } from 'lucide-angular';
import { Modal } from '@shared/components/modal/modal';
import { SelectInput } from '@shared/components/select-input/select-input';

@Component({
  selector: 'app-inventory',
  imports: [Button, LucideAngularModule, TextInput, Table, Modal, SelectInput],
  templateUrl: './inventory.html',
})
export class Inventory {
  protected readonly icons = { Plus, Search, Funnel };
  protected readonly isModalOpen = signal(false);
  protected readonly categoryOptions = categoryOptions;
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
