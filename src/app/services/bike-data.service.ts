import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Part } from '../models/part.model';

@Injectable({
  providedIn: 'root'
})
export class BikeDataService {
  private partsSubject = new BehaviorSubject<Part[]>([
    {
      id: 'p1',
      name: 'Vorderrad',
      description: '28 Zoll, Alu-Felge, Schwalbe Marathon Plus Reifen.',
      installationDate: new Date('2023-05-15'),
      wearLevel: 10,
      position: { x: 20, y: 55 }
    },
    {
      id: 'p2',
      name: 'Hinterrad',
      description: '28 Zoll, Shimano Deore Nabe, Schwalbe Marathon Plus.',
      installationDate: new Date('2023-05-15'),
      wearLevel: 15,
      position: { x: 80, y: 55 }
    },
    {
      id: 'p3',
      name: 'Kette',
      description: 'Shimano HG-93, 9-fach.',
      installationDate: new Date('2024-01-10'),
      wearLevel: 40,
      position: { x: 50, y: 65 }
    },
    {
      id: 'p4',
      name: 'Lenker',
      description: 'Ergonomischer Trekking-Lenker, Alu schwarz.',
      installationDate: new Date('2022-03-20'),
      wearLevel: 5,
      position: { x: 25, y: 20 }
    },
    {
      id: 'p5',
      name: 'Sattel',
      description: 'Gelsattel, breit, bequem.',
      installationDate: new Date('2022-03-20'),
      wearLevel: 25,
      position: { x: 45, y: 35 }
    }
  ]);

  private selectedPartSubject = new BehaviorSubject<Part | null>(null);

  constructor() { }

  getParts(): Observable<Part[]> {
    return this.partsSubject.asObservable();
  }

  getSelectedPart(): Observable<Part | null> {
    return this.selectedPartSubject.asObservable();
  }

  selectPart(partId: string): void {
    const part = this.partsSubject.value.find(p => p.id === partId);
    if (part) {
      this.selectedPartSubject.next(part);
    }
  }
}
