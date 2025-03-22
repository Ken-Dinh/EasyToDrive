import { Component, OnInit } from '@angular/core';
import { Examen } from '../../model/examen';
import { Test } from '../../model/test';
import { Simulation } from '../../model/simulation';
import { Eleve } from '../../model/eleve';
import { Avis } from '../../model/avis';
import { formatDate } from '@angular/common';
import { Router } from '@angular/router';

type TableKey = 'eleves' | 'examens' | 'tests' | 'simulation';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  standalone: false,
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent {

  formatDateFr(date: string) {
    return formatDate(date, "longDate", "fr");
  }

  formatTimestampFr(timestamp: string) {
    return formatDate(timestamp, "medium", "fr")
  }

  listeExamen: Examen[] = [{
    examen_id: 99,
    date: this.formatTimestampFr("2025-05-29 08:20:50"),
    score: 17.5
  }];

  listeTest: Test[] = [{
    test_id: 13,
    date: this.formatTimestampFr("2023-11-14 08:20:50"),
    score: 12.5,
    theme: "Signalisation"
  }];

  listeSimulation: Simulation[] = [{
    simulation_id: 402,
    date: this.formatTimestampFr("2023-11-14 08:20:50"),
    validation: true,
  }];

  listeEleve: Eleve[] = [{
    eleve_id: 29,
    login: "liam.cheurfa",
    password: "liam123",
    naissance: this.formatDateFr("2005-03-29"),
    rue: "51 rue jean jaurès",
    cp: 93470,
    ville: "Coubron",
    date_inscription: this.formatTimestampFr("2023-08-21 08:20:50"),
    neph: "563899279407",
    note_etg: "14.5",
    validation_etg: true,
  }];

  listeAvis: Avis[] = [{
    avis_id: 111,
    contenu: "Très bien pour voir simplement ses notes",
    date_publication: this.formatTimestampFr("2025-03-12 08:20:50"),
  }];

  
  selectedTable: TableKey = 'eleves';
  tables = [
    { key: 'eleves', label: 'Élèves' },
    { key: 'examens', label: 'Examens' },
    { key: 'tests', label: 'Tests' },
    { key: 'simulation', label: 'Simulations' }
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