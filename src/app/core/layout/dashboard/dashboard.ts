import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Button } from '@shared/components/button/button';
import { LogOut, LucideAngularModule, Pill } from 'lucide-angular';

@Component({
  selector: 'app-dashboard',
  imports: [RouterOutlet, LucideAngularModule, Button],
  templateUrl: './dashboard.html',
})
export class Dashboard {
  protected readonly icons = { Pill, LogOut };
}
