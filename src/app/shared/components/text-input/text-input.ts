import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { LucideAngularModule, LucideIconData } from 'lucide-angular';

@Component({
  selector: 'app-text-input',
  imports: [LucideAngularModule, ReactiveFormsModule],
  templateUrl: './text-input.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TextInput {
  public readonly placeholder = input.required<string>();
  public readonly control = input.required<FormControl>();
  public readonly icon = input<LucideIconData>();
  public readonly iconPosition = input<'left' | 'right'>('left');
  public readonly label = input<string>();
  public readonly type = input('text');
}
