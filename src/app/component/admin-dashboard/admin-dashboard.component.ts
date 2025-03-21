import { Component } from '@angular/core';
import { Examen } from '../../model/examen';
import { Test } from '../../model/test';
import { Simulation } from '../../model/simulation';
import { Eleve } from '../../model/eleve';
import { Avis } from '../../model/avis';

@Component({
  selector: 'app-admin-dashboard',
  standalone: false,
  templateUrl: './admin-dashboard.component.html',
  styleUrl: './admin-dashboard.component.css'
})
export class AdminDashboardComponent {
listeExamen?: Examen[] = [{
    examen_id: 99,
    date: "2025-16-29", 
    score: 17.5
  }]

  listeTest?: Test[] = [{
    test_id: 13,
    date: "2023-11-14", 
    score: 12.5,
    theme: "Signalisation"
  }]

  listeSimulation?: Simulation[] = [{
    simulation_id: 402,
    date: "2023-11-14", 
    validation: true,
    
  }]

  listeEleve?: Eleve[] = [{
    eleve_id: 29,
    login: "liam.cheurfa",
    password: "liam123",
    naissance: "2005-03-29",
    rue: "51 rue jean jaurès",
    cp: 93470,
    ville: "Coubron",
    date_inscription: "2023-08-21",
    neph: "563899279407",
    note_etg: "14.5",
    validation_etg: true,
    
  }]
  
  listeAvis?: Avis[] = [{
    avis_id: 111,
    contenu: "Très bien pour voir simplement ses notes", 
    date_publication: "2025-03-12",
    
  }]
}
