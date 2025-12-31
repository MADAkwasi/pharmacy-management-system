import { CommonModule, DatePipe } from '@angular/common';
import { ChangeDetectionStrategy, Component, computed, input } from '@angular/core';
import { Button } from '@shared/components/button/button';
import { activatedUsersTableColumn, deactivatedUsersTableColumn } from '@shared/constants/table';
import { DEMO_USERS } from '@shared/constants/user';
import { LucideAngularModule, UserX } from 'lucide-angular';

@Component({
  selector: 'app-user-table',
  imports: [Button, LucideAngularModule, DatePipe, CommonModule],
  templateUrl: './user-table.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UserTable {
  public readonly type = input.required<'activated' | 'deactivated'>();
  protected readonly icons = { UserX };
  protected readonly users = DEMO_USERS;
  protected readonly headCols = computed(() =>
    this.type() === 'activated' ? activatedUsersTableColumn : deactivatedUsersTableColumn
  );
}
