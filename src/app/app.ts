import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { BicycleSchematicComponent } from './components/bicycle-schematic/bicycle-schematic';
import { QuickStatsComponent } from './components/quick-stats/quick-stats.component';
import { MaintenanceListComponent } from './components/maintenance-list/maintenance-list.component';
import { PartDetailsComponent } from './components/part-details/part-details';
import { BottomNavComponent } from './components/bottom-nav/bottom-nav.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    HeaderComponent,
    BicycleSchematicComponent,
    QuickStatsComponent,
    MaintenanceListComponent,
    PartDetailsComponent,
    BottomNavComponent
  ],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('velo-app');
}
