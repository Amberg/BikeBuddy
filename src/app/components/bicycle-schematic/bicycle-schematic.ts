import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs';
import { BikeDataService } from '../../services/bike-data.service';
import { Part } from '../../models/part.model';

@Component({
  selector: 'app-bicycle-schematic',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './bicycle-schematic.html',
  styleUrls: ['./bicycle-schematic.scss']
})
export class BicycleSchematicComponent implements OnInit {
  parts$: Observable<Part[]>;
  selectedPart$: Observable<Part | null>;

  constructor(private bikeService: BikeDataService) {
    this.parts$ = this.bikeService.getParts();
    this.selectedPart$ = this.bikeService.getSelectedPart();
  }

  ngOnInit(): void {
  }

  selectPart(id: string): void {
    this.bikeService.selectPart(id);
  }
}
