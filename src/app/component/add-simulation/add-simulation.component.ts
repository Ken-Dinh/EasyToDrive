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
      timestamp: new FormControl(this.currentDate),
      valie: new FormControl(false)
    });

    this.getExamen();
  }

  getExamen() {
    this.examenService.getExamen().subscribe((response: any) => {
      this.listeExamen = response.examen;
    });
  }

  addSimulation(){
    const examen_id = this.addSimulationForm.get("examen_id")?.value;
    const date = this.addSimulationForm.get("timestamp")?.value;
    const validation = this.addSimulationForm.get("valie")?.value;
    
    const _simulation: Simulation = {
      examen_id: parseInt(examen_id),
      date: date,
      validation: validation
    }
    
    this.simulationService.postSimulation(_simulation).subscribe((response: any) => {
      this.message = response.message;
    });
  }
}


