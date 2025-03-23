import { Component, OnInit } from '@angular/core';
import { Examen } from '../../model/examen';
import { Test } from '../../model/test';
import { Simulation } from '../../model/simulation';
import { Eleve } from '../../model/eleve';
import { Avis } from '../../model/avis';
import { formatDate } from '@angular/common';
import { Router } from '@angular/router';
import { ExamenService } from '../../service/examen.service';
import { SimulationService } from '../../service/simulation.service';
import { EleveService } from '../../service/eleve.service';
import { TestService } from '../../service/test.service';
import { ControllerService } from '../../service/delete_controller.service';

type TableKey = 'eleve' | 'examen' | 'test' | 'simulation'| 'avis';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  standalone: false,
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent implements OnInit {
  shouldDisableActions(): boolean {
    return this.selectedTable === 'avis'; 
  }
  listeExamen: Examen[] = [];
  listeSimulation: Simulation[] = [];
  listeEleve: Eleve[] = [];
  listeTest: Test[] = [];
  listeAvis: Avis[] = [
    {
      avis_id: 1,
      contenu: "Très bon service, je recommande !",
      date_publication: "2023-10-01 08:20:50",
    },
    {
      avis_id: 2,
      contenu: "Formateurs très compétents et à l'écoute.",
      date_publication: "2023-10-05 10:30:00",
    },
  ];

  message: string = "";
  
  constructor(private router: Router,
    private examenService: ExamenService,
    private simulationService: SimulationService,
    private eleveService: EleveService,
    private testService: TestService,
    private controllerService: ControllerService) {}

  ngOnInit(): void {
    this.getExamen();
    this.getSimulation();
    this.getEleve();
    this.getTest();
  }

  formatListDates<T>(list: T[], dateField: keyof T): T[] {
    return list.map(item => ({
      ...item,
      [dateField]: this.formatDateFr(item[dateField])
    }));
  }

  formatListTimestamps<T>(list: T[], dateField: keyof T): T[] {
    return list.map(item => ({
      ...item,
      [dateField]: this.formatTimestampFr(item[dateField])
    }));
  }

  formatDateFr(date: any) {
    return formatDate(date, "longDate", "fr");
  }

  formatTimestampFr(timestamp: any) {
    return formatDate(timestamp, "medium", "fr")
  }

  getExamen() {
    this.examenService.getExamen().subscribe((response: any) => {
      this.listeExamen = this.formatListTimestamps(response.examen, "date");
    });
  }

  getSimulation() {
    this.simulationService.getSimulation().subscribe((response: any) => {
      this.listeSimulation = this.formatListTimestamps(response.simulation, "date");
    });
  }

  getEleve() {
    this.eleveService.getEleve().subscribe((response: any) => {
      this.listeEleve = this.formatListTimestamps(response.eleve, "date_inscription");
      this.listeEleve = this.formatListDates(this.listeEleve, "naissance");
      this.listeEleve = this.listeEleve.map(({password, ...rest}) => rest);
    });
  }

  getTest() {
    this.testService.getTest().subscribe((response: any) => {
      this.listeTest = this.formatListTimestamps(response.test, "date");
    });
  }

  getAvis() {

  }
  
  selectedTable: TableKey = 'eleve';
  tables = [
    { key: 'eleve', label: 'Élèves' },
    { key: 'examen', label: 'Examens' },
    { key: 'test', label: 'Tests' },
    { key: 'simulation', label: 'Simulations' },
    { key: 'avis', label: 'Avis' }
  ];

  routeMappingAdd: Record<TableKey, string> = {
    eleve: 'add-eleve',
    examen: 'add-examen',
    test: 'add-test',
    simulation: 'add-simulation',
    avis: 'add-avis'

  };

  routeMappingPut: Record<TableKey, string> = {
    eleve: 'put-eleve',
    examen: 'put-examen',
    test: 'put-test',
    simulation: 'put-simulation',
    avis: 'put-avis'
  };

  idFieldMapping: Record<TableKey, string> = {
    eleve: 'eleve_id',
    examen: 'examen_id',
    test: 'test_id',
    simulation: 'simulation_id',
    avis: 'avis_id'
  };

  

  changeTable(event: Event) {
    const target = event.target as HTMLSelectElement;
    this.selectedTable = target.value as TableKey;
    this.message = "";
  }

  getAddRoute(): string {
    return `/${this.routeMappingAdd[this.selectedTable]}`;
  }

  getPutRoute(item: any): string {
    return `/${this.routeMappingPut[this.selectedTable]}/${item[this.idFieldMapping[this.selectedTable]]}`;
  }

  getSelectedTableData() {
    switch (this.selectedTable) {
      case 'eleve':
        return this.listeEleve;
      case 'examen':
        return this.listeExamen;
      case 'test':
        return this.listeTest;
      case 'simulation':
        return this.listeSimulation;
      case 'avis': 
        return this.listeAvis;
      default:
        return [];
    }
  }

  onDelete(item: any) {
    const idField = this.idFieldMapping[this.selectedTable];
    const itemId = item[idField];

    if (!itemId) {
      this.message = 'ID non trouvé pour l\'élément à supprimer';
      return;
    }

    const data = {
      table: this.selectedTable,
      id: itemId
    }

    this.controllerService.delete(data).subscribe((response: any) => {
      switch (this.selectedTable) {
        case 'eleve':
          this.listeEleve = this.listeEleve.filter(eleve => eleve[idField as keyof Eleve] !== itemId);
          break;
        case 'examen':
          this.listeExamen = this.listeExamen.filter(examen => examen[idField as keyof Examen] !== itemId);
          break;
        case 'test':
          this.listeTest = this.listeTest.filter(test => test[idField as keyof Test] !== itemId);
          break;
        case 'simulation':
          this.listeSimulation = this.listeSimulation.filter(simulation => simulation[idField as keyof Simulation] !== itemId);
          break;
      }

      this.message = response.message;
    });
  }

  showDeletePopup = false; 
  itemToDelete: any;

  openDeletePopup(item: any) {
    this.itemToDelete = item;
    this.showDeletePopup = true;
  }

  onDeleteConfirmed() {
    this.onDelete(this.itemToDelete);
    this.showDeletePopup = false; 
  }
  
  onDeleteCancelled() {
    this.showDeletePopup = false; 
  }

}