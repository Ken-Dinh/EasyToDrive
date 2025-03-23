import { Component, OnInit } from '@angular/core';
import { Eleve } from '../../model/eleve';
import { Examen } from '../../model/examen';
import { Test } from '../../model/test';
import { Simulation } from '../../model/simulation';
import { EleveResultatService } from '../../service/eleve-resultat.service';

@Component({
  selector: 'app-eleve-dashboard',
  standalone: false,
  templateUrl: './eleve-dashboard.component.html',
  styleUrl: './eleve-dashboard.component.css'
})
export class EleveDashboardComponent implements OnInit {
  token: any = localStorage.getItem("token");
  listeExamen: Examen[] = []
  listeTest: Test[] = []
  listeSimulation: Simulation[] = []

  constructor(private eleveResultat: EleveResultatService) {}

  ngOnInit(): void {
      this.getResultat();
  }

  getResultat() {
    this.eleveResultat.getEleveResult(this.token).subscribe((response: any) => {
      this.listeExamen = response.examen;
      this.listeTest = response.test;
      this.listeSimulation = response.simulation;
    });
  }
}

