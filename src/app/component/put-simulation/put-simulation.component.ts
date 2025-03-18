import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-put-simulation',
  standalone: false,
  templateUrl: './put-simulation.component.html',
  styleUrl: './put-simulation.component.css'
})
export class PutSimulationComponent {
  putSimulationForm!: FormGroup;

  constructor() {}
  ngOnInit(): void {
    this.putSimulationForm = new FormGroup({
      timestamp: new FormControl(""),
      valie: new FormControl(""),
      
    });
  }
putSimulation(){
  const timestamp = this.putSimulationForm.get("timestamp")?.value;
  const valie = this.putSimulationForm.get("valie")?.value;
  
  
}
}


