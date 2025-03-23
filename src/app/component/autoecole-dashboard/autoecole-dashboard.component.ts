import { Component, OnInit } from '@angular/core';
import { Examen } from '../../model/examen';
import { Test } from '../../model/test';
import { Simulation } from '../../model/simulation';
import { Eleve } from '../../model/eleve';
import { EleveResultatService } from '../../service/eleve-resultat.service';
@Component({
  selector: 'app-auto-ecole-dashboard',
  standalone: false,
  templateUrl: './autoecole-dashboard.component.html',
  styleUrls: ['./autoecole-dashboard.component.css'],
})
export class AutoEcoleDashboardComponent implements OnInit {
  listeEleves: Eleve[] = [];
  selectedEleveId: number | null = null;
  selectedEleveExamens: Examen[] = [];
  selectedEleveSimulations: Simulation[] = [];
  selectedEleveTests: Test[] = [];

  eleveExamensMap: Map<number, Examen[]> = new Map();
  eleveSimulationsMap: Map<number, Simulation[]> = new Map();
  eleveTestsMap: Map<number, Test[]> = new Map();

  token: any = localStorage.getItem("token");

  constructor(private eleveResultatService: EleveResultatService) {}

  ngOnInit(): void {
    this.getEleves();
  }

  getEleves() {
    this.eleveResultatService.getEleve(this.token).subscribe((response: any) => {
      this.listeEleves = response.eleve;
      this.getAllResultForEleves();
    });
  }

  getAllResultForEleves() {
    this.listeEleves.forEach((eleve) => {
      const eleveId: number = eleve.eleve_id ?? 0;
      this.eleveResultatService.getEleveResultById(eleveId).subscribe((response: any) => {
        this.eleveExamensMap.set(eleveId, response.examen);
        this.eleveSimulationsMap.set(eleveId, response.simulation);
        this.eleveTestsMap.set(eleveId, response.test);

        if (this.selectedEleveId === null) {
          this.selectedEleveId = eleve.eleve_id ?? 0;
          this.changeEleve({
            target: {
              value: this.selectedEleveId
            }
          });
        }
      });
    });
  }
  
  changeEleve(event: any): void {
    const eleveId = +event.target.value; 
    this.selectedEleveId = eleveId;

    this.selectedEleveExamens = this.eleveExamensMap.get(eleveId) || [];
    this.selectedEleveSimulations = this.eleveSimulationsMap.get(eleveId) || [];
    this.selectedEleveTests = this.eleveTestsMap.get(eleveId) || [];
  }
}