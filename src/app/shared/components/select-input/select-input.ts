import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { SelectOption } from '@shared/models/user';
import { ChevronDown, LucideAngularModule, LucideIconData } from 'lucide-angular';

@Component({
  selector: 'app-select-input',
  imports: [LucideAngularModule, ReactiveFormsModule],
  templateUrl: './select-input.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SelectInput {
  public readonly options = input.required<SelectOption[]>();
  public readonly control = input.required<FormControl>();
  public readonly placeholder = input<string>();
  public readonly hasPlaceholder = input(true);
  public readonly label = input<string>();
  public readonly leftIcon = input<LucideIconData>();
  protected readonly icons = { ChevronDown };
}
