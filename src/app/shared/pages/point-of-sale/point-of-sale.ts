import { CommonModule, CurrencyPipe } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  computed,
  inject,
  OnInit,
  signal,
  viewChildren,
} from '@angular/core';
import { FormControl } from '@angular/forms';
import { Sale } from '@core/services/sale/sale';
import { Button } from '@shared/components/button/button';
import { TextInput } from '@shared/components/text-input/text-input';
import { Medication } from '@shared/models/medication';
import { mockMedications } from '@shared/constants/medication';
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
  X,
} from 'lucide-angular';
import { mockCustomers } from '@shared/constants/customer';
import { Customer } from '@shared/models/customer';

@Component({
  selector: 'app-point-of-sale',
  imports: [TextInput, LucideAngularModule, CommonModule, Button, CurrencyPipe],
  templateUrl: './point-of-sale.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PointOfSale implements OnInit {
  private readonly saleService = inject(Sale);
  private readonly textInputs = viewChildren<TextInput>(TextInput);
  protected readonly selectedMedications = this.saleService.selectedMedications;
  protected readonly medications = this.saleService.medications;
  protected readonly searchMedicationKeyword = signal(new FormControl(''));
  protected readonly searchCustomerKeyword = signal(new FormControl(''));
  protected readonly customers = mockCustomers;
  protected readonly selectedCustomer = signal<Customer | null>(null);
  protected readonly paymentMethods: PaymentMethod[] = ['cash', 'card', 'mobile_money'];
  protected readonly selectedMethod = signal<PaymentMethod>('cash');
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
    X,
  };
  protected readonly subTotal = this.saleService.subTotal;
  protected readonly tax = computed(() => this.subTotal() * 0.08);

  protected readonly total = computed(() => this.subTotal() + this.tax());
  protected readonly categories = computed(() => [
    ...new Set(['All', ...this.medications().map((med) => med.category)]),
  ]);
  protected readonly filteredMedications = computed(() => {
    if (this.selectedCategory() === 'All') return this.medications();

    return this.medications().filter((med) => med.category === this.selectedCategory());
  });

  ngOnInit(): void {
    this.saleService.initMedications(mockMedications);
  }

  protected handleSelectCustomer(customer: Customer | null) {
    this.selectedCustomer.set(customer);
    this.searchCustomerKeyword().setValue(customer?.name ?? '');
    const customerInput = this.textInputs().find(
      (input) => input.placeholder() === 'Search customer...'
    );

    customerInput?.blur();
  }

  protected handleClearCustomer(): void {
    this.selectedCustomer.set(null);
    this.searchCustomerKeyword().setValue('');
  }

  protected handleSelectSale(item: Medication): void {
    this.saleService.addMedication(item);
  }

  protected handleRemoveSale(item: SaleItem): void {
    this.saleService.removeSaleItem(item);
  }

  protected handleSaleItemQuantity(medicationId: string, operation: 'add' | 'minus'): void {
    this.saleService.changeSaleItemQuantity(medicationId, operation);
  }
}
