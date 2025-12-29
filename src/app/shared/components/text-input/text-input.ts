import { Component, input } from '@angular/core';
import { LucideAngularModule, LucideIconData } from 'lucide-angular';

@Component({
  selector: 'app-text-input',
  imports: [LucideAngularModule],
  templateUrl: './text-input.html',
})
export class TextInput {
  public readonly placeholder = input.required<string>();
  public readonly icon = input<LucideIconData>();
  public readonly iconPosition = input<'left' | 'right'>('left');
  public readonly label = input('');
  public readonly type = input('text');
}
