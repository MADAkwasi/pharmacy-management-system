import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { FormBuilder, FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { Button } from '@shared/components/button/button';
import { CustomerCard } from '@shared/components/customer-card/customer-card';
import { Modal } from '@shared/components/modal/modal';
import { TextInput } from '@shared/components/text-input/text-input';
import { mockCustomers } from '@shared/constants/customer';
import { LucideAngularModule, Plus, Search } from 'lucide-angular';

@Component({
  selector: 'app-customers',
  imports: [Button, LucideAngularModule, Modal, TextInput, CustomerCard, ReactiveFormsModule, TextInput],
  templateUrl: './customers.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Customers {
  private readonly fb = inject(FormBuilder);
  protected readonly customers = mockCustomers;
  protected readonly searchKeyword = signal(new FormControl(''));
  protected readonly isModalOpen = signal(false);
  protected readonly icons = { Plus, Search };
  protected readonly customerForm = this.fb.group({
    fullName: ['', [Validators.required]],
    email: ['', [Validators.required, Validators.email]],
    phone: ['', [Validators.required]],
    address: ['', [Validators.required]],
    dateOfBirth: ['', [Validators.required]],
  });
}
