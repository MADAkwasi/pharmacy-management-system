import { CommonModule, CurrencyPipe } from '@angular/common';
import { ChangeDetectionStrategy, Component, computed, signal } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Button } from '@shared/components/button/button';
import { TextInput } from '@shared/components/text-input/text-input';
import { mockMedications } from '@shared/constants/medication';
import { LucideAngularModule, Pill, Search } from 'lucide-angular';

@Component({
  selector: 'app-point-of-sale',
  imports: [TextInput, LucideAngularModule, CommonModule, Button, CurrencyPipe],
  templateUrl: './point-of-sale.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PointOfSale {
  protected readonly searchKeyword = signal(new FormControl(''));
  protected readonly medications = signal(mockMedications);
  protected readonly selectedCategory = signal('All');
  protected readonly icons = { Search, Pill };
  protected readonly categories = computed(() => [
    ...new Set(['All', ...this.medications().map((med) => med.category)]),
  ]);
  protected readonly filteredMedications = computed(() => {
    if (this.selectedCategory() === 'All') return this.medications();

    return this.medications().filter((med) => med.category === this.selectedCategory());
  });
}
