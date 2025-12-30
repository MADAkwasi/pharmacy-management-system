import { Component } from '@angular/core';
import { TextInput } from '../text-input/text-input';
import { SelectInput } from '../select-input/select-input';
import { Button } from '../button/button';
import { roleOptions } from '@shared/constants/user';

@Component({
  selector: 'app-user-form',
  imports: [TextInput, SelectInput, Button],
  templateUrl: './user-form.html',
})
export class UserForm {
  protected readonly options = roleOptions;
}
