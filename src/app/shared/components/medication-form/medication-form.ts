import { Component } from '@angular/core';
import { Button } from '../button/button';
import { TextInput } from '../text-input/text-input';
import { SelectInput } from '../select-input/select-input';
import { categoryOptions } from '@shared/constants/medication';

@Component({
  selector: 'app-medication-form',
  imports: [Button, TextInput, SelectInput],
  templateUrl: './medication-form.html',
})
export class MedicationForm {
  protected readonly options = categoryOptions
}
