import { computed, Injectable, signal } from '@angular/core';
import { Medication } from '@shared/models/medication';
import { SaleItem } from '@shared/models/sales';

@Injectable({
  providedIn: 'root',
})
export class Sale {
  public readonly medications = signal<Medication[]>([]);
  public readonly selectedMedications = signal<SaleItem[]>([]);
  public readonly subTotal = computed(() =>
    this.selectedMedications().reduce((sum, item) => sum + item.total, 0)
  );

  public initMedications(meds: Medication[]) {
    if (this.medications().length > 0) return;
    this.medications.set(meds);
  }

  public changeSaleItemQuantity(medicationId: string, operation: 'add' | 'minus'): void {
    this.updateSelectedMedications(medicationId, operation);
    this.updateInventory(medicationId, operation);
  }

  public removeSaleItem(item: SaleItem): void {
    this.selectedMedications.update((meds) =>
      meds.filter((m) => m.medicationId !== item.medicationId)
    );

    this.medications.update((meds) =>
      meds.map((med) =>
        med.id === item.medicationId ? { ...med, quantity: med.quantity + item.quantity } : med
      )
    );
  }

  public addMedication(item: Medication) {
    if (this.selectedMedications().some((m) => m.medicationId === item.id)) return;

    this.selectedMedications.update((meds) =>
      meds.some((m) => m.medicationId === item.id)
        ? meds
        : [
            ...meds,
            {
              medicationId: item.id,
              medicationName: item.name,
              quantity: 1,
              unitPrice: item.unitPrice,
              total: item.unitPrice,
            },
          ]
    );

    this.updateInventory(item.id, 'add');
  }

  private updateSelectedMedications(medicationId: string, operation: 'add' | 'minus') {
    this.selectedMedications.update((meds) =>
      meds
        .map((med) => {
          if (med.medicationId !== medicationId) return med;

          const quantity = operation === 'add' ? med.quantity + 1 : med.quantity - 1;

          return {
            ...med,
            quantity,
            total: quantity * med.unitPrice,
          };
        })
        .filter((med) => med.quantity > 0)
    );
  }

  private updateInventory(medicationId: string, operation: 'add' | 'minus') {
    const inventoryChange = operation === 'add' ? -1 : +1;

    this.medications.update((meds) =>
      meds.map((med) =>
        med.id === medicationId ? { ...med, quantity: med.quantity + inventoryChange } : med
      )
    );
  }
}
