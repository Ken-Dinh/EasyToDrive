import { Component } from '@angular/core';
import { Router } from '@angular/router';

type TableKey = 'eleves' | 'examens' | 'tests' | 'simulation';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  standalone: false,
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent {
  selectedTable: TableKey = 'eleves';
  tables = [
    { key: 'eleves', label: 'Élèves' },
    { key: 'examens', label: 'Examens' },
    { key: 'tests', label: 'Tests' },
    { key: 'simulation', label: 'Simulations' }
  ];

  // Données de test
  listeEleve = [
    { id: 1, nom: 'Liam', prenom: 'Cheurfa' },
    { id: 2, nom: 'Jean', prenom: 'Dupont' }
  ];
  listeExamen = [
    { id: 1, nom: 'Examen 1', date: '2023-01-01' },
    { id: 2, nom: 'Examen 2', date: '2023-02-01' }
  ];
  listeTest = [
    { id: 1, nom: 'Test 1', score: 80 },
    { id: 2, nom: 'Test 2', score: 90 }
  ];
  listeSimulation = [
    { id: 1, nom: 'Simulation 1', resultat: 'Réussi' },
    { id: 2, nom: 'Simulation 2', resultat: 'Échoué' }
  ];

  // Mapping pour les routes d'ajout
  routeMappingAdd: Record<TableKey, string> = {
    eleves: 'add-eleve',
    examens: 'add-examen',
    tests: 'add-test',
    simulation: 'add-simulation'
  };

  // Mapping pour les routes de modification
  routeMappingPut: Record<TableKey, string> = {
    eleves: 'put-eleve',
    examens: 'put-examen',
    tests: 'put-test',
    simulation: 'put-simulation'
  };

  constructor(private router: Router) {}

  changeTable(event: Event) {
    const target = event.target as HTMLSelectElement;
    this.selectedTable = target.value as TableKey;
  }

  getAddRoute(): string {
    return `/${this.routeMappingAdd[this.selectedTable]}`;
  }

  getPutRoute(item: any): string {
    return `/${this.routeMappingPut[this.selectedTable]}/${item.id}`;
  }

  getSelectedTableData() {
    switch (this.selectedTable) {
      case 'eleves':
        return this.listeEleve;
      case 'examens':
        return this.listeExamen;
      case 'tests':
        return this.listeTest;
      case 'simulation':
        return this.listeSimulation;
      default:
        return [];
    }
  }

  onDelete(item: any) {
    console.log('Élément à supprimer :', item);
    // Ajoutez ici la logique pour supprimer l'élément
  }

  onEdit(item: any) {
    console.log('Élément à modifier :', item);
    // Ajoutez ici la logique pour modifier l'élément
  }
}