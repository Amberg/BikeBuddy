import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs';
import { BikeDataService } from '../../services/bike-data.service';
import { Part } from '../../models/part.model';

@Component({
  selector: 'app-part-details',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './part-details.html',
  styleUrls: ['./part-details.scss']
})
export class PartDetailsComponent implements OnInit {
  selectedPart$: Observable<Part | null>;
  isModalOpen = false;

  constructor(private bikeService: BikeDataService) {
    this.selectedPart$ = this.bikeService.getSelectedPart();
  }

  ngOnInit(): void {
    this.selectedPart$.subscribe(part => {
      this.isModalOpen = !!part;
    });
  }

  close() {
    this.bikeService.selectPart(null);
  }

  getWearBarStyle(wear: number) {
    if (wear > 80) return { width: wear + '%', background: 'linear-gradient(to right, #f87171, #dc2626)' }; // red
    if (wear > 40) return { width: wear + '%', background: 'linear-gradient(to right, #facc15, #eab308)' }; // yellow
    return { width: wear + '%', background: 'linear-gradient(to right, #4ade80, #22c55e)' }; // green
  }
}
