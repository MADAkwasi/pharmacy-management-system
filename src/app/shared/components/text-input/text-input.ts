import { Component, input } from '@angular/core';

@Component({
  selector: 'app-text-input',
  imports: [],
  templateUrl: './text-input.html',
})
export class TextInput {
  public readonly placeholder = input.required<string>();
  public readonly label = input('');
  public readonly type = input('text');
}
