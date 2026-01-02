import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { LucideAngularModule, LucideIconData } from 'lucide-angular';

@Component({
  selector: 'app-audit-logs',
  imports: [LucideAngularModule],
  templateUrl: './audit-logs.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AuditLogs {
  public readonly title = input.required<string>();
  public readonly icon = input.required<LucideIconData>();
  public readonly iconColor = input.required<string>();
}
