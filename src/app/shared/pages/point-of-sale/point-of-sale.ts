import { CommonModule, CurrencyPipe } from '@angular/common';
import { ChangeDetectionStrategy, Component, computed, signal } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Button } from '@shared/components/button/button';
import { TextInput } from '@shared/components/text-input/text-input';
import { mockMedications } from '@shared/constants/medication';
import { Medication } from '@shared/models/medication';
import { PaymentMethod, SaleItem } from '@shared/models/sales';
import {
  Check,
  CreditCard,
  HandCoins,
  LucideAngularModule,
  Minus,
  Pill,
  Plus,
  Search,
  ShoppingCart,
  Smartphone,
  Trash2,
  User,
} from 'lucide-angular';

@Component({
  selector: 'app-point-of-sale',
  imports: [TextInput, LucideAngularModule, CommonModule, Button, CurrencyPipe],
  templateUrl: './point-of-sale.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PointOfSale {
  protected readonly searchMedicationKeyword = signal(new FormControl(''));
  protected readonly searchCustomerKeyword = signal(new FormControl(''));
  protected readonly paymentMethods: PaymentMethod[] = ['cash', 'card', 'mobile_money'];
  protected readonly selectedMethod = signal<PaymentMethod>('cash');
  protected readonly selectedMedications = signal<SaleItem[]>([]);
  protected readonly medications = signal(mockMedications);
  protected readonly selectedCategory = signal('All');
  protected readonly icons = {
    Search,
    Pill,
    HandCoins,
    Smartphone,
    CreditCard,
    User,
    ShoppingCart,
    Trash2,
    Check,
    Plus,
    Minus,
  };
  protected readonly subTotal = computed(() =>
    this.selectedMedications().reduce((sum, item) => sum + item.total, 0)
  );
  protected readonly tax = computed(() => this.subTotal() * 0.08);

  protected readonly total = computed(() => this.subTotal() + this.tax());
  protected readonly categories = computed(() => [
    ...new Set(['All', ...this.medications().map((med) => med.category)]),
  ]);
  protected readonly filteredMedications = computed(() => {
    if (this.selectedCategory() === 'All') return this.medications();

    return this.medications().filter((med) => med.category === this.selectedCategory());
  });

  protected handleSelectSale(item: Medication): void {
    if (this.selectedMedications().some((m) => m.medicationId === item.id)) return;

    const saleItem: SaleItem = {
      medicationId: item.id,
      medicationName: item.name,
      quantity: 1,
      unitPrice: item.unitPrice,
      total: item.unitPrice,
    };

    this.medications.update((meds) =>
      meds.map((med) => (med.id === item.id ? { ...med, quantity: med.quantity - 1 } : med))
    );

    this.selectedMedications.update((meds) => [...meds, saleItem]);
  }

  protected handleRemoveSale(item: SaleItem): void {
    this.selectedMedications.update((meds) =>
      meds.filter((m) => m.medicationId !== item.medicationId)
    );
  }

  protected handleSaleItemQuantity(medicationId: string, operation: 'add' | 'minus'): void {
    this.selectedMedications.update((meds) =>
      meds
        .map((med) => {
          if (med.medicationId !== medicationId) return med;

          const quantity = operation === 'add' ? med.quantity + 1 : med.quantity - 1;

          return {
            ...med,
            quantity,
            total: quantity * med.unitPrice,
          };
        })
        .filter((med) => med.quantity > 0)
    );

    this.medications.update((meds) =>
      meds.map((med) => {
        if (med.id !== medicationId) return med;

        const inventoryChange = operation === 'add' ? -1 : +1;

        return {
          ...med,
          quantity: med.quantity + inventoryChange,
        };
      })
    );
  }
}
