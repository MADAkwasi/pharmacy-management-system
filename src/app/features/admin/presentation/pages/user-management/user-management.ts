import { Component, signal } from '@angular/core';
import { Button } from '@shared/components/button/button';
import { Shield, UserPlus, Users, UserX } from 'lucide-angular';
import { LucideAngularModule } from 'lucide-angular/src/icons';
import { UserTable } from '../../components/user-table/user-table';
import { Modal } from '@shared/components/modal/modal';
import { TextInput } from '@shared/components/text-input/text-input';
import { roleOptions } from '@shared/constants/user';
import { SelectInput } from '@shared/components/select-input/select-input';

@Component({
  selector: 'app-user-management',
  imports: [Button, LucideAngularModule, UserTable, Modal, TextInput, SelectInput],
  templateUrl: './user-management.html',
})
export class UserManagement {
  protected readonly isModalOpen = signal(false);
  protected readonly options = roleOptions;
  protected readonly icons = { UserPlus, Shield, Users, UserX };
}
