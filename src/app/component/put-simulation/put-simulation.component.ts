import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Simulation } from '../../model/simulation';
import { SimulationService } from '../../service/simulation.service';
import { ActivatedRoute } from '@angular/router';
import { ExamenService } from '../../service/examen.service';
import { Examen } from '../../model/examen';

@Component({
  selector: 'app-put-simulation',
  templateUrl: './put-simulation.component.html',
  standalone: false,
  styleUrls: ['./put-simulation.component.css']
})
export class PutSimulationComponent implements OnInit {
  putSimulationForm!: FormGroup;
  simulationId!: number;
  listeExamen: Examen[] = [];
  message: string = "";
  simulation: Simulation = {};
  
  constructor(private simulationService: SimulationService, private examenService: ExamenService, private route: ActivatedRoute) {}
  
  ngOnInit(): void {
    this.putSimulationForm = new FormGroup({
      simulation_id: new FormControl({value: "", disabled: true}),
      examen_id: new FormControl(""),
      date: new FormControl(""),
      validation: new FormControl(false)
    });

    this.route.params.subscribe(params => {
      this.simulationId = +params["id"];
      this.getSimulationById(this.simulationId);
    })

    this.getExamen();
  }

  getExamen() {
    this.examenService.getExamen().subscribe((response: any) => {
      this.listeExamen = response.examen;
    });
  }

  setSimulationForm() {
    this.putSimulationForm = new FormGroup({
      simulation_id: new FormControl({value: this.simulation.simulation_id, disabled: true}),
      examen_id: new FormControl(this.simulation.examen_id),
      date: new FormControl(this.simulation.date),
      validation: new FormControl(this.simulation.validation)
    });
  }

  getSimulationById(id: number) {
    this.simulationService.getSimulationById(id).subscribe((response: any) => {
      this.simulation = response.simulation;
      this.setSimulationForm();
    });
  }

  putSimulation() {
    const formattedDate = this.putSimulationForm.value.date.replace('T', ' ');
    const _simulation: Simulation = {...this.putSimulationForm.getRawValue(), date: formattedDate};

    this.simulationService.putSimulation(_simulation).subscribe((response: any) => {
      this.message = response.message;
    });
  }
}