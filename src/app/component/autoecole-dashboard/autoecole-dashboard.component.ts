import { Component, OnInit } from '@angular/core';
import { Examen } from '../../model/examen';
import { Test } from '../../model/test';
import { Simulation } from '../../model/simulation';
import { Eleve } from '../../model/eleve';
@Component({
  selector: 'app-auto-ecole-dashboard',
  standalone: false,
  templateUrl: './autoecole-dashboard.component.html',
  styleUrls: ['./autoecole-dashboard.component.css'],
})
export class AutoEcoleDashboardComponent implements OnInit {
  listeEleves: Eleve[] = [];

  selectedEleveExamens: Examen[] = [];
  selectedEleveSimulations: Simulation[] = [];
  selectedEleveTests: Test[] = [];

  selectedEleveId: number | null = null;

  eleveExamensMap: Map<number, Examen[]> = new Map();
  eleveSimulationsMap: Map<number, Simulation[]> = new Map();
  eleveTestsMap: Map<number, Test[]> = new Map();

  ngOnInit(): void {
    this.listeEleves = [
      {
        eleve_id: 29,
        login: "liam.cheurfa",
        password: "liam123",
        naissance: "2005-03-29",
        rue: "51 rue jean jaurès",
        cp: 93470,
        ville: "Coubron",
        date_inscription: "2023-08-21 08:20:50",
        neph: "563899279407",
        note_etg: "14.5",
        validation_etg: true,
      },
      {
        eleve_id: 30,
        login: "john.doe",
        password: "john123",
        naissance: "2004-07-15",
        rue: "123 rue de Paris",
        cp: 75001,
        ville: "Paris",
        date_inscription: "2023-09-01 10:00:00",
        neph: "123456789012",
        note_etg: "16.0",
        validation_etg: true,
      },
    ];

   
    this.eleveExamensMap.set(29, [
      { examen_id: 99, date: "2025-05-29 08:20:50", score: 17.5 },
    ]);
    this.eleveExamensMap.set(30, [
      { examen_id: 100, date: "2025-06-01 10:30:00", score: 15.0 },
    ]);

    
    this.eleveSimulationsMap.set(29, [
      { simulation_id: 402, date: "2023-11-14 08:20:50", validation: true },
    ]);
    this.eleveSimulationsMap.set(30, [
      { simulation_id: 403, date: "2023-11-15 09:00:00", validation: false },
    ]);

    
    this.eleveTestsMap.set(29, [
      { test_id: 13, date: "2023-11-14 08:20:50", score: 12.5, theme: "Signalisation" },
    ]);
    this.eleveTestsMap.set(30, [
      { test_id: 14, date: "2023-11-15 09:00:00", score: 18.0, theme: "Priorités" },
    ]);

    
    if (this.listeEleves.length > 0) {
      this.changeEleve({ target: { value: this.listeEleves[0].eleve_id } });
    }
  }

  
  changeEleve(event: any): void {
    const eleveId = +event.target.value; 
    this.selectedEleveId = eleveId;

    this.selectedEleveExamens = this.eleveExamensMap.get(eleveId) || [];
    this.selectedEleveSimulations = this.eleveSimulationsMap.get(eleveId) || [];
    this.selectedEleveTests = this.eleveTestsMap.get(eleveId) || [];
  }
}

/*
import { Component, OnInit } from '@angular/core';
import { Examen } from '../../model/examen';
import { Test } from '../../model/test';
import { Simulation } from '../../model/simulation';
import { Eleve } from '../../model/eleve';
@Component({
  selector: 'app-autoecole-dashboard',
  templateUrl: './autoecole-dashboard.component.html',
  standalone: false,
  styleUrls: ['./autoecole-dashboard.component.css'],
})
export class AutoEcoleDashboardComponent implements OnInit {
  // Liste des élèves assignés à l'auto-école
  listeEleves: Eleve[] = [
    {
      eleve_id: 29,
      login: "liam.cheurfa",
      password: "liam123",
      naissance: "2005-03-29",
      rue: "51 rue jean jaurès",
      cp: 93470,
      ville: "Coubron",
      date_inscription: "2023-08-21 08:20:50",
      neph: "563899279407",
      note_etg: "14.5",
      validation_etg: true,
    },
    {
      eleve_id: 30,
      login: "john.doe",
      password: "john123",
      naissance: "2004-07-15",
      rue: "123 rue de Paris",
      cp: 75001,
      ville: "Paris",
      date_inscription: "2023-09-01 10:00:00",
      neph: "123456789012",
      note_etg: "16.0",
      validation_etg: true,
    },
  ];

  // Données placeholder pour les examens, simulations et tests
  listeExamens: Examen[] = [
    { examen_id: 99, date: "2025-05-29 08:20:50", score: 17.5, eleve_id: 29 },
    { examen_id: 100, date: "2025-06-01 10:30:00", score: 15.0, eleve_id: 30 },
  ];

  listeSimulations: Simulation[] = [
    { simulation_id: 402, date: "2023-11-14 08:20:50", validation: true, eleve_id: 29 },
    { simulation_id: 403, date: "2023-11-15 09:00:00", validation: false, eleve_id: 30 },
  ];

  listeTests: Test[] = [
    { test_id: 13, date: "2023-11-14 08:20:50", score: 12.5, theme: "Signalisation", eleve_id: 29 },
    { test_id: 14, date: "2023-11-15 09:00:00", score: 18.0, theme: "Priorités", eleve_id: 30 },
  ];

  // Données de l'élève sélectionné
  selectedEleveExamens: Examen[] = [];
  selectedEleveSimulations: Simulation[] = [];
  selectedEleveTests: Test[] = [];

  // ID de l'élève sélectionné
  selectedEleveId: number | null = null;

  ngOnInit(): void {
    // Sélectionner le premier élève par défaut
    if (this.listeEleves.length > 0) {
      this.changeEleve({ target: { value: this.listeEleves[0].eleve_id } });
    }
  }

  // Méthode pour changer l'élève sélectionné
  changeEleve(event: any): void {
    const eleveId = +event.target.value; // Convertir en nombre
    this.selectedEleveId = eleveId;

    // Filtrer les résultats pour l'élève sélectionné
    this.selectedEleveExamens = this.listeExamens.filter(e => e.eleve_id === eleveId);
    this.selectedEleveSimulations = this.listeSimulations.filter(s => s.eleve_id === eleveId);
    this.selectedEleveTests = this.listeTests.filter(t => t.eleve_id === eleveId);
  }
} */