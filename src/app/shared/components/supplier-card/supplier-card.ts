import { Component, input } from '@angular/core';
import { Button } from '../button/button';
import {
  LucideAngularModule,
  MapPin,
  Pen,
  Phone,
  Trash2,
  Mail,
  User,
  Building2,
  Clock,
} from 'lucide-angular';
import { Supplier } from '@shared/models/supplier';

@Component({
  selector: 'app-supplier-card',
  imports: [Button, LucideAngularModule],
  templateUrl: './supplier-card.html',
})
export class SupplierCard {
  public readonly supplier = input.required<Supplier>();
  protected readonly icons = { Pen, Trash2, Phone, MapPin, Mail, User, Building2, Clock };
}
