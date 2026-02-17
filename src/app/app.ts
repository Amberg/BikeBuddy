import { Component, signal } from '@angular/core';
import { BicycleSchematicComponent } from './components/bicycle-schematic/bicycle-schematic';
import { PartDetailsComponent } from './components/part-details/part-details';

@Component({
  selector: 'app-root',
  imports: [BicycleSchematicComponent, PartDetailsComponent],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('velo-app');
}
