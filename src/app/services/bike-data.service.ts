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
      name: 'Kette & Antrieb',
      subtitle: 'Shimano Dura-Ace',
      description: 'Shimano Dura-Ace HG-901, 11-fach.',
      installationDate: new Date('2023-05-12'),
      wearLevel: 85,
      status: 'critical',
      statusText: 'Kritisch',
      statusColor: 'text-red-600',
      recommendation: 'Achtung: Dieses Teil hat die Verschleißgrenze erreicht. Bitte umgehend austauschen.',
      recommendationClass: 'bg-red-50 border-red-100 text-red-600',
      recommendationIcon: 'fa-triangle-exclamation text-red-500',
      position: { x: 31, y: 70 } // Adjusted for schematic
    },
    {
      id: 'p2',
      name: 'Schaltwerk',
      subtitle: 'SRAM Red eTap',
      description: 'SRAM Red eTap AXS, 12-fach, kabellos.',
      installationDate: new Date('2024-01-15'),
      wearLevel: 20,
      status: 'good',
      statusText: 'Gut',
      statusColor: 'text-green-600',
      recommendation: 'Dieses Teil ist in einwandfreiem Zustand.',
      recommendationClass: 'bg-green-50 border-green-100 text-green-700',
      recommendationIcon: 'fa-check-circle text-green-500',
      position: { x: 50, y: 70 }
    },
    {
      id: 'p3',
      name: 'Vorderbremse',
      subtitle: 'Shimano Ultegra Disc',
      description: 'Hydraulische Scheibenbremse, 160mm Rotor.',
      installationDate: new Date('2023-08-10'),
      wearLevel: 45,
      status: 'warning',
      statusText: 'Beobachten',
      statusColor: 'text-yellow-600',
      recommendation: 'Normale Abnutzung sichtbar. Regelmäßige Kontrolle empfohlen.',
      recommendationClass: 'bg-yellow-50 border-yellow-100 text-yellow-700',
      recommendationIcon: 'fa-circle-info text-yellow-500',
      position: { x: 75, y: 70 }
    },
    {
      id: 'p4',
      name: 'Sattel',
      subtitle: 'Fizik Antares',
      description: 'Carbon-gestärkter Sattel für Langstrecken.',
      installationDate: new Date('2022-01-01'),
      wearLevel: 10,
      status: 'good',
      statusText: 'Gut',
      statusColor: 'text-green-600',
      recommendation: 'Dieses Teil ist in einwandfreiem Zustand.',
      recommendationClass: 'bg-green-50 border-green-100 text-green-700',
      recommendationIcon: 'fa-check-circle text-green-500',
      position: { x: 26, y: 30 }
    },
    {
      id: 'p5',
      name: 'Lenker',
      subtitle: 'Canyon H36 Cockpit',
      description: 'Aero-Cockpit, Carbon, einteilig.',
      installationDate: new Date('2022-01-01'),
      wearLevel: 5,
      status: 'good',
      statusText: 'Gut',
      statusColor: 'text-green-600',
      recommendation: 'Dieses Teil ist in einwandfreiem Zustand.',
      recommendationClass: 'bg-green-50 border-green-100 text-green-700',
      recommendationIcon: 'fa-check-circle text-green-500',
      position: { x: 72, y: 20 }
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

  selectPart(partId: string | null): void {
    if (partId === null) {
      this.selectedPartSubject.next(null);
      return;
    }
    const part = this.partsSubject.value.find(p => p.id === partId);
    if (part) {
      this.selectedPartSubject.next(part);
    }
  }
}
