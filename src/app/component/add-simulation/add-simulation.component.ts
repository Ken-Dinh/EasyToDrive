import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-add-simulation',
  standalone: false,
  templateUrl: './add-simulation.component.html',
  styleUrl: './add-simulation.component.css'
})
export class AddSimulationComponent {
  addSimulationForm!: FormGroup;

  constructor() {}
  ngOnInit(): void {
    this.addSimulationForm = new FormGroup({
      timestamp: new FormControl(""),
      valie: new FormControl(""),
      
    });
  }
addSimulation(){
  const timestamp = this.addSimulationForm.get("timestamp")?.value;
  const valie = this.addSimulationForm.get("valie")?.value;
  
  
}
}


