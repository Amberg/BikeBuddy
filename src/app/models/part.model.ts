export interface Part {
    id: string;
    name: string;
    subtitle: string;
    description: string;
    installationDate: Date;
    wearLevel: number; // 0-100
    status: 'good' | 'warning' | 'critical';
    statusText: string;
    statusColor?: string;
    recommendation: string;
    recommendationClass?: string;
    recommendationIcon?: string;
    position?: { x: number; y: number }; // Percentage coordinates for the schematic
}
