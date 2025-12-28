import { Component, input, output } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-button',
  imports: [CommonModule],
  templateUrl: './button.html',
})
export class Button {
  public readonly title = input.required<string>();
  public readonly variant = input<'primary' | 'secondary' | 'tertiary'>('primary');
  public readonly customStyles = input<string>('');
  public readonly type = input<'button' | 'submit'>('button');
  public readonly clickEvent = output<Event>();

  protected handleOnClick(event: Event): void {
    this.clickEvent.emit(event);
  }
}
