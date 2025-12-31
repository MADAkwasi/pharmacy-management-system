import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { TextInput } from '@shared/components/text-input/text-input';
import { SelectInput } from '@shared/components/select-input/select-input';
import { Button } from '@shared/components/button/button';
import { roleOptions } from '@shared/constants/user';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-user-form',
  imports: [TextInput, SelectInput, Button, ReactiveFormsModule],
  templateUrl: './user-form.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UserForm {
  private readonly fb = inject(FormBuilder);
  protected readonly options = roleOptions;
  protected readonly userForm = this.fb.group({
    fullName: ['', Validators.required],
    email: ['', Validators.required],
    role: ['', Validators.required],
  });
}
