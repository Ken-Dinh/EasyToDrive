import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { ExamenService } from '../../service/examen.service';
import { Examen } from '../../model/examen';
import { Simulation } from '../../model/simulation';
import { SimulationService } from '../../service/simulation.service';
import { formatDate } from '@angular/common';

@Component({
  selector: 'app-add-simulation',
  standalone: false,
  templateUrl: './add-simulation.component.html',
  styleUrl: './add-simulation.component.css'
})
export class AddSimulationComponent {
  addSimulationForm!: FormGroup;
  listeExamen: Examen[] = [];
  message: string = "";
  currentDate: string = formatDate(new Date(), 'yyyy-MM-dd hh:mm:ss', 'fr');

  constructor(private examenService: ExamenService, private simulationService: SimulationService) {}

  ngOnInit(): void {
    this.addSimulationForm = new FormGroup({
      examen_id: new FormControl(""),
      date: new FormControl(this.currentDate),
      validation: new FormControl(false)
    });

    this.getExamen();
  }

  getExamen() {
    this.examenService.getExamen().subscribe((response: any) => {
      this.listeExamen = response.examen;
    });
  }

  addSimulation(){
    const _simulation: Simulation = this.addSimulationForm.value;
    this.simulationService.postSimulation(_simulation).subscribe((response: any) => {
      this.message = response.message;
    });
  }
}


