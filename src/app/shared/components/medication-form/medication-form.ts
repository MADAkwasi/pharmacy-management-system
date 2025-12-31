import { Component, ChangeDetectionStrategy, inject } from '@angular/core';
import { Button } from '../button/button';
import { TextInput } from '../text-input/text-input';
import { SelectInput } from '../select-input/select-input';
import { categoryOptions } from '@shared/constants/medication';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-medication-form',
  imports: [Button, TextInput, SelectInput, ReactiveFormsModule],
  templateUrl: './medication-form.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MedicationForm {
  private readonly fb = inject(FormBuilder);
  protected readonly options = categoryOptions;
  protected readonly medicationForm = this.fb.group({
    medicationName: ['', Validators.required],
    genericName: ['', Validators.required],
    category: [this.options[0].value, Validators.required],
    manufacturer: ['', Validators.required],
    batchNumber: ['', Validators.required],
    expiryDate: ['', Validators.required],
    quantity: [0, Validators.required],
    minStockLevel: [0, Validators.required],
    costPrice: [0, Validators.required],
    sellingPrice: [0, Validators.required],
    description: ['', Validators.required],
    requiresProtection: [false],
  });
}
