import { Component, signal } from '@angular/core';
import { Button } from '@shared/components/button/button';
import { Shield, UserPlus, Users, UserX } from 'lucide-angular';
import { LucideAngularModule } from 'lucide-angular/src/icons';
import { UserTable } from '../../components/user-table/user-table';
import { Modal } from '@shared/components/modal/modal';
import { TextInput } from '@shared/components/text-input/text-input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { roleOptions } from '@shared/constants/user';

@Component({
  selector: 'app-user-management',
  imports: [
    Button,
    LucideAngularModule,
    UserTable,
    Modal,
    TextInput,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
  ],
  templateUrl: './user-management.html',
})
export class UserManagement {
  protected readonly isModalOpen = signal(false);
  protected readonly options = roleOptions;
  protected readonly icons = { UserPlus, Shield, Users, UserX };
}
