import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LucideAngularModule, Pill } from 'lucide-angular';

@Component({
  selector: 'app-dashboard',
  imports: [RouterOutlet, LucideAngularModule],
  templateUrl: './dashboard.html',
})
export class Dashboard {
  protected readonly icons = {Pill}
}
