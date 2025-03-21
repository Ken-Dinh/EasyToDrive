import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { Examen } from '../../model/examen';

@Component({
  selector: 'app-put-examen',
  standalone: false,
  templateUrl: './put-examen.component.html',
  styleUrl: './put-examen.component.css'
})
export class PutExamenComponent {
  putExamenForm!: FormGroup;
  
  listeExamen?: Examen[] = [{
      examen_id: 99,
      date: "2025-11-29", 
      score: 17.5
    }]

  constructor() {}
  ngOnInit(): void {
    
    this.putExamenForm = new FormGroup({
      score: new FormControl(""),
      timestamp: new FormControl("")
      
    });
  }
putExamen(){
  const score = this.putExamenForm.get("score")?.value;
  const timestamp = this.putExamenForm.get("timestamp")?.value;
  
  
}
}
