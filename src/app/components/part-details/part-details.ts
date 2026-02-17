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
  part$: Observable<Part | null>;

  constructor(private bikeService: BikeDataService) {
    this.part$ = this.bikeService.getSelectedPart();
  }

  ngOnInit(): void {
  }

}
