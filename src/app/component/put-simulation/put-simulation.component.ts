import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-put-simulation',
  templateUrl: './put-simulation.component.html',
  standalone: false,
  styleUrls: ['./put-simulation.component.css']
})
export class PutSimulationComponent implements OnInit {
  
  putSimulationForm!: FormGroup;

  
  listeSimulation = [{
    simulation_id: 402,
    date: "2023-11-14",
    validation: true
  }];

  
  ngOnInit(): void {
    this.putSimulationForm = new FormGroup({
      date: new FormControl(this.listeSimulation[0].date),       
      validation: new FormControl(this.listeSimulation[0].validation) 
    });
  }

  
  putSimulation() {
    const date = this.putSimulationForm.get("date")?.value;
    const validation = this.putSimulationForm.get("validation")?.value;
    console.log({ date, validation }); 
  }
}