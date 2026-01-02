import { ChangeDetectionStrategy, Component, ElementRef, input, viewChild } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { LucideAngularModule, LucideIconData } from 'lucide-angular';

@Component({
  selector: 'app-text-input',
  imports: [LucideAngularModule, ReactiveFormsModule],
  templateUrl: './text-input.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TextInput {
  private readonly input = viewChild<ElementRef<HTMLInputElement>>('input');
  public readonly placeholder = input.required<string>();
  public readonly control = input.required<FormControl>();
  public readonly icon = input<LucideIconData>();
  public readonly iconPosition = input<'left' | 'right'>('left');
  public readonly label = input<string>();
  public readonly type = input('text');

  public blur(): void {
    this.input()?.nativeElement.blur();
    (document.activeElement as HTMLElement)?.blur();
  }
}
