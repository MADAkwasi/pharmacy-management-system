import { Component, signal } from '@angular/core';
import { Button } from '@shared/components/button/button';
import { Shield, UserPlus, Users, UserX } from 'lucide-angular';
import { LucideAngularModule } from 'lucide-angular/src/icons';
import { UserTable } from '../../components/user-table/user-table';
import { Modal } from '@shared/components/modal/modal';
import { UserForm } from '@shared/components/user-form/user-form';

@Component({
  selector: 'app-user-management',
  imports: [Button, LucideAngularModule, UserTable, Modal, UserForm],
  templateUrl: './user-management.html',
})
export class UserManagement {
  protected readonly isModalOpen = signal(false);
  protected readonly icons = { UserPlus, Shield, Users, UserX };
}
