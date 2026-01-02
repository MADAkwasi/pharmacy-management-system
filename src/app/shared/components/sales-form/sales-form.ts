import { PaymentMethod, SaleItem } from './../../models/sales';
import {
  ChangeDetectionStrategy,
  Component,
  computed,
  inject,
  OnInit,
  signal,
} from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { debounceTime, distinctUntilChanged } from 'rxjs';
import { FormBuilder, FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { Button } from '../button/button';
import {
  CreditCard,
  HandCoins,
  LucideAngularModule,
  Minus,
  Plus,
  Printer,
  Search,
  Smartphone,
  X,
} from 'lucide-angular';
import { SelectInput } from '../select-input/select-input';
import { mockCustomers } from '@shared/constants/customer';
import { CommonModule, CurrencyPipe } from '@angular/common';
import { TextInput } from '../text-input/text-input';
import { mockMedications } from '@shared/constants/medication';
import { Sale } from '@core/services/sale/sale';

type Medication = (typeof mockMedications)[number];

@Component({
  selector: 'app-sales-form',
  imports: [
    Button,
    LucideAngularModule,
    SelectInput,
    CommonModule,
    TextInput,
    CurrencyPipe,
    ReactiveFormsModule,
  ],
  templateUrl: './sales-form.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SalesForm implements OnInit {
  private readonly fb = inject(FormBuilder);
  private readonly saleService = inject(Sale);
  protected readonly icons = {
    Plus,
    Minus,
    HandCoins,
    CreditCard,
    Smartphone,
    Printer,
    Search,
    X,
  };
  protected readonly medications = this.saleService.medications;
  protected readonly selectedMedications = this.saleService.selectedMedications;
  protected readonly paymentMethods: PaymentMethod[] = ['cash', 'card', 'mobile_money'];
  protected readonly selectedMethod = signal<PaymentMethod>('cash');

  protected readonly medicationKeywordControl = new FormControl('');
  protected readonly medicationKeyword = toSignal(
    this.medicationKeywordControl.valueChanges.pipe(debounceTime(200), distinctUntilChanged()),
    { initialValue: '' }
  );
  protected readonly saleForm = this.fb.group({
    medications: [[] as SaleItem[], Validators.required],
    customer: ['walk-in-customer'],
    selectedPayment: ['card'],
    discount: [0],
  });

  protected readonly options = computed(() => [
    { label: 'Walk in customer', value: 'walk-in-customer' },
    ...mockCustomers.map((customer) => ({
      label: customer.name,
      value: customer.name.replaceAll(/\s+/g, '-').toLowerCase(),
    })),
  ]);

  protected readonly filteredSearch = computed(() => {
    const keyword = this.medicationKeyword()?.trim().toLowerCase();
    if (!keyword) return [];

    return this.medications()
      .map((med) => {
        const name = med.name.toLowerCase();
        const generic = med.genericName?.toLowerCase() ?? '';
        const category = med.category.toLowerCase();

        let score = 0;
        if (name.startsWith(keyword)) score += 3;
        else if (name.includes(keyword)) score += 2;
        if (generic.includes(keyword)) score += 1;
        if (category.includes(keyword)) score += 0.5;

        return score > 0 ? { med, score } : null;
      })
      .filter((v): v is { med: Medication; score: number } => v !== null)
      .sort((a, b) => b.score - a.score)
      .map((result) => result.med);
  });

  protected readonly subTotal = this.saleService.subTotal;
  protected readonly tax = computed(() => this.subTotal() * 0.08);
  protected readonly discount = toSignal(this.saleForm.controls.discount.valueChanges, {
    initialValue: this.saleForm.controls.discount.value ?? 0,
  });

  protected readonly total = computed(() => this.subTotal() + this.tax() - (this.discount() ?? 0));

  ngOnInit(): void {
    this.saleService.initMedications(mockMedications);
  }

  protected handleSelectMedication(item: Medication): void {
    this.saleService.addMedication(item);
    this.medicationKeywordControl.setValue('');
  }

  protected handleRemoveSale(item: SaleItem): void {
    this.saleService.removeSaleItem(item);
  }

  protected handleSaleItemQuantity(medicationId: string, operation: 'add' | 'minus'): void {
    this.saleService.changeSaleItemQuantity(medicationId, operation);
  }
}
