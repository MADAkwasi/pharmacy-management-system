import { DatePipe } from '@angular/common';
import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { Customer } from '@shared/models/customer';
import { Button } from '../button/button';
import { LucideAngularModule, Mail, MapPin, Pen, Phone, Trash2 } from 'lucide-angular';

@Component({
  selector: 'app-customer-card',
  imports: [DatePipe, Button, LucideAngularModule],
  templateUrl: './customer-card.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CustomerCard {
  public readonly customer = input.required<Customer>();
  protected readonly icons = { Pen, Trash2, Mail, Phone, MapPin };
}
