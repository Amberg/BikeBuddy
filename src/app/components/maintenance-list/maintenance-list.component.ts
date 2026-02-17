import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-maintenance-list',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './maintenance-list.component.html',
})
export class MaintenanceListComponent {
    // Mock data for now, could be moved to service later
    maintenanceItems = [
        {
            name: 'Kassette',
            detail: 'Shimano Ultegra 11-30',
            status: 'Neu',
            statusClass: 'text-green-500',
            date: 'Vor 2 Tagen',
            icon: 'fa-gear'
        },
        {
            name: 'Reifen Hinten',
            detail: 'Continental GP5000',
            status: 'OK',
            statusClass: 'text-gray-500',
            date: 'Vor 3 Wochen',
            icon: 'fa-circle-notch'
        }
    ];
}
