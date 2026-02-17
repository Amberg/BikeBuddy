export interface Part {
    id: string;
    name: string;
    description: string;
    installationDate: Date;
    wearLevel: number; // 0-100
    position?: { x: number; y: number }; // Percentage coordinates for the schematic
}
