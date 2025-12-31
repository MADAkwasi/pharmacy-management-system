import { ChangeDetectionStrategy, Component } from '@angular/core';
import { TextInput } from '@shared/components/text-input/text-input';
import { SelectInput } from '@shared/components/select-input/select-input';
import { Button } from '@shared/components/button/button';
import { roleOptions } from '@shared/constants/user';

@Component({
  selector: 'app-user-form',
  imports: [TextInput, SelectInput, Button],
  templateUrl: './user-form.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UserForm {
  protected readonly options = roleOptions;
}
