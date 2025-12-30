import { Component, input } from '@angular/core';
import { SelectOption } from '@shared/models/user';
import { ChevronDown, LucideAngularModule, LucideIconData } from 'lucide-angular';

@Component({
  selector: 'app-select-input',
  imports: [LucideAngularModule],
  templateUrl: './select-input.html',
})
export class SelectInput {
  public readonly options = input.required<SelectOption[]>();
  public readonly placeholder = input<string>();
  public readonly hasPlaceholder = input(true);
  public readonly label = input<string>();
  public readonly leftIcon = input<LucideIconData>();
  protected readonly icons = { ChevronDown };
}
