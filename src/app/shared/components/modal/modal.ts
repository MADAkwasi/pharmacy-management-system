import { Component, input, output } from '@angular/core';
import { LucideAngularModule, X } from 'lucide-angular';
import { Button } from '../button/button';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-modal',
  imports: [LucideAngularModule, Button, CommonModule],
  templateUrl: './modal.html',
})
export class Modal {
  public readonly isModalOpen = input.required<boolean>();
  public readonly title = input.required<string>();
  public readonly hasFixedHeader = input(false);
  public readonly hasBottomCloseBtn = input(false);
  public readonly hasXCloseButton = input(true);
  public readonly subtitle = input('');
  public readonly closeModal = output();
  protected readonly icons = { X };

  protected handleModalClose(): void {
    this.closeModal.emit();
  }
}
