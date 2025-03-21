import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  standalone: false,
  styleUrls: ['./table.component.css']
})
export class TableComponent {
  @Input() data: any[] = []; // Reçoit les données de AdminDashboardComponent

  // Méthode pour obtenir les clés des objets (utilisée pour les en-têtes de colonnes)
  getKeys(obj: any): string[] {
    return Object.keys(obj);
  }
}