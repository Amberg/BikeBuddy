import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-quick-stats',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './quick-stats.component.html',
})
export class QuickStatsComponent {
    @Input() kilometers = 124;
    @Input() criticalParts = 1;
}
