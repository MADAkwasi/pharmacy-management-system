import { Component, inject, signal } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { Button } from '@shared/components/button/button';
import {
  adminNavigation,
  pharmacistNavigation,
  salesAttendantNavigation,
} from '@shared/constants/navlinks';
import { DashboardNavigation } from '@shared/models/navlinks';
import { Roles } from '@shared/models/user';
import { LogOut, LucideAngularModule, Pill, Settings, UserCog } from 'lucide-angular';

@Component({
  selector: 'app-dashboard',
  imports: [RouterModule, LucideAngularModule, Button],
  templateUrl: './dashboard.html',
})
export class Dashboard {
  private readonly router = inject(Router);
  protected readonly userRole = signal<Roles>(Roles.ADMIN);
  protected readonly icons = { Pill, LogOut, Settings, UserCog };
  protected readonly navigationByRole: Record<Roles, DashboardNavigation[]> = {
    [Roles.ADMIN]: adminNavigation,
    [Roles.PHARMACIST]: pharmacistNavigation,
    [Roles.SALES_ATTENDANT]: salesAttendantNavigation,
  };

  protected readonly userNavigation = signal(
    this.navigationByRole[this.userRole()] ?? salesAttendantNavigation
  );

  protected onLogout(): void {
    this.router.navigate(['/login']);
  }
}
