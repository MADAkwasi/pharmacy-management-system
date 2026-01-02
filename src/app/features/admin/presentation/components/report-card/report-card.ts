import { CurrencyPipe } from '@angular/common';
import { Component, computed, input } from '@angular/core';
import { LucideAngularModule, LucideIconData } from 'lucide-angular';

@Component({
  selector: 'app-report-card',
  imports: [LucideAngularModule, CurrencyPipe],
  templateUrl: './report-card.html',
})
export class ReportCard {
  public readonly title = input.required<string>();
  public readonly summary = input.required<number>();
  public readonly icon = input.required<LucideIconData>();
  public readonly iconColor = input.required<string>();
  public readonly isCurrency = input(false);
  protected readonly bgColor = computed(() => {
    const color = this.iconColor();
    return this.hexToRgba(color, 0.15);
  });

  private hexToRgba(hex: string, alpha: number): string {
    const h = hex.replace('#', '');
    const r = Number.parseInt(h.substring(0, 2), 16);
    const g = Number.parseInt(h.substring(2, 4), 16);
    const b = Number.parseInt(h.substring(4, 6), 16);
    return `rgba(${r}, ${g}, ${b}, ${alpha})`;
  }
}
