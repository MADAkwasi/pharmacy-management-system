import { PaymentMethod } from './../../models/sales';
import { ChangeDetectionStrategy, Component, computed, signal } from '@angular/core';
import { Button } from '../button/button';
import {
  CreditCard,
  HandCoins,
  LucideAngularModule,
  Plus,
  Printer,
  Search,
  Smartphone,
} from 'lucide-angular';
import { SelectInput } from '../select-input/select-input';
import { mockCustomers } from '@shared/constants/customer';
import { CommonModule, CurrencyPipe } from '@angular/common';
import { TextInput } from '../text-input/text-input';

@Component({
  selector: 'app-sales-form',
  imports: [Button, LucideAngularModule, SelectInput, CommonModule, TextInput, CurrencyPipe],
  templateUrl: './sales-form.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SalesForm {
  protected readonly icons = { Plus, HandCoins, CreditCard, Smartphone, Printer, Search };
  protected readonly subTotal = signal(0);
  protected readonly tax = signal(0);
  protected readonly total = signal(0);
  protected readonly paymentMethods: PaymentMethod[] = ['cash', 'card', 'mobile_money'];
  protected readonly selectedMethod = signal<PaymentMethod>('cash');
  protected readonly options = computed(() => [
    { label: 'Walk in customer', value: 'walk-in-customer' },
    ...mockCustomers.map((customer) => ({
      label: customer.name,
      value: customer.name.replace(' ', '-').toLowerCase(),
    })),
  ]);
}
