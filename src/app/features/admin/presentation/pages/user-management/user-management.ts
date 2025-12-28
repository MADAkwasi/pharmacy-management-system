import { Component } from '@angular/core';
import { Button } from '@shared/components/button/button';
import { Shield, UserPlus, Users, UserX } from 'lucide-angular';
import { LucideAngularModule } from 'lucide-angular/src/icons';
import { UserTable } from '../../components/user-table/user-table';

@Component({
  selector: 'app-user-management',
  imports: [Button, LucideAngularModule, UserTable],
  templateUrl: './user-management.html',
})
export class UserManagement {
  protected readonly icons = { UserPlus, Shield, Users, UserX };
}
