import { Component } from '@angular/core';
import { Eleve } from '../../model/eleve';
import { Examen } from '../../model/examen';
import { Test } from '../../model/test';
import { Simulation } from '../../model/simulation';

@Component({
  selector: 'app-eleve-dashboard',
  standalone: false,
  templateUrl: './eleve-dashboard.component.html',
  styleUrl: './eleve-dashboard.component.css'
})
export class EleveDashboardComponent {
  listeExamen: Examen[] = [{
    examen_id: 99,
    date: "2025-16-29", 
    score: 17.5
  }]

  listeTest: Test[] = [{
    test_id: 13,
    date: "2023-11-14", 
    score: 12.5,
    theme: "Signalisation"
  }]

  listeSimulation: Simulation[] = [{
    simulation_id: 402,
    date: "2016-11-14", 
    validation: true
  }]
  

}
