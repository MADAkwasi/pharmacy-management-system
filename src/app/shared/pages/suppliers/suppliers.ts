import { Component, inject, signal } from '@angular/core';
import { FormBuilder, FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { Button } from '@shared/components/button/button';
import { Modal } from '@shared/components/modal/modal';
import { SelectInput } from '@shared/components/select-input/select-input';
import { SupplierCard } from '@shared/components/supplier-card/supplier-card';
import { TextInput } from '@shared/components/text-input/text-input';
import { mockSuppliers, paymentTermsOptions } from '@shared/constants/supplier';
import { LucideAngularModule, Plus, Search } from 'lucide-angular';

@Component({
  selector: 'app-suppliers',
  imports: [
    LucideAngularModule,
    Button,
    Modal,
    TextInput,
    ReactiveFormsModule,
    SelectInput,
    SupplierCard,
  ],
  templateUrl: './suppliers.html',
})
export class Suppliers {
  private readonly fb = inject(FormBuilder);
  protected readonly searchKeyword = signal(new FormControl(''));
  protected readonly isModalOpen = signal(false);
  protected readonly icons = { Plus, Search };
  protected readonly termsOptions = paymentTermsOptions;
  protected readonly suppliers = mockSuppliers;
  protected readonly supplierForm = this.fb.group({
    companyName: ['', [Validators.required]],
    contactPerson: ['', [Validators.required]],
    email: ['', [Validators.required, Validators.email]],
    phone: ['', [Validators.required]],
    address: ['', [Validators.required]],
    paymentTerms: ['net-15', [Validators.required]],
  });
}
