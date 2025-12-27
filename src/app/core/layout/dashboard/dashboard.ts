import { Component, computed, signal } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Button } from '@shared/components/button/button';
import {
  adminNavigation,
  pharmacistNavigation,
  salesAttendantNavigation,
} from '@shared/constants/navlinks';
import { Roles } from '@shared/models/users';
import { LogOut, LucideAngularModule, Pill, Settings, UserCog } from 'lucide-angular';

@Component({
  selector: 'app-dashboard',
  imports: [RouterModule, LucideAngularModule, Button],
  templateUrl: './dashboard.html',
})
export class Dashboard {
  protected readonly userRole = signal<Roles>(Roles.ADMIN);
  protected readonly icons = { Pill, LogOut, Settings, UserCog };
  protected readonly userNavigation = computed(() =>
    this.userRole() === Roles.ADMIN
      ? adminNavigation
      : this.userRole() === Roles.PHARMACIST
      ? pharmacistNavigation
      : salesAttendantNavigation
  );
}
