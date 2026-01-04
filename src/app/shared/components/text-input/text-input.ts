import {
  ChangeDetectionStrategy,
  Component,
  computed,
  ElementRef,
  input,
  output,
  signal,
  viewChild,
} from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { Eye, EyeClosed, LucideAngularModule, LucideIconData } from 'lucide-angular';
import { Button } from '../button/button';

@Component({
  selector: 'app-text-input',
  imports: [LucideAngularModule, ReactiveFormsModule, Button],
  templateUrl: './text-input.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TextInput {
  private readonly input = viewChild<ElementRef<HTMLInputElement>>('input');
  protected readonly icons = { Eye, EyeClosed };
  protected readonly isPasswordVisible = signal(false);
  public readonly togglePasswordVisibility = output<void>();
  public readonly placeholder = input.required<string>();
  public readonly control = input.required<FormControl>();
  public readonly icon = input<LucideIconData>();
  public readonly iconPosition = input<'left' | 'right'>('left');
  public readonly label = input<string>();
  public readonly type = input('text');
  protected readonly resolvedType = computed(() => {
    if (this.type() !== 'password') {
      return this.type();
    }

    return this.isPasswordVisible() ? 'text' : 'password';
  });

  public onTogglePasswordVisibility(): void {
    this.isPasswordVisible.update((bool) => !bool);
    this.togglePasswordVisibility.emit();
  }
}
