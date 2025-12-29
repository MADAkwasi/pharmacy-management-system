import { Component } from '@angular/core';
import { Button } from '@shared/components/button/button';
import { Table } from '@shared/components/table/table';
import { TextInput } from '@shared/components/text-input/text-input';
import { LucideAngularModule, Plus, Search } from 'lucide-angular';

@Component({
  selector: 'app-inventory',
  imports: [Button, LucideAngularModule, TextInput, Table],
  templateUrl: './inventory.html',
})
export class Inventory {
  protected readonly icons = { Plus, Search };
}
