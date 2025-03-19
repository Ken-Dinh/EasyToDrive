import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-add-examen',
  standalone: false,
  templateUrl: './add-examen.component.html',
  styleUrl: './add-examen.component.css'
})
export class AddExamenComponent {
  addExamenForm!: FormGroup;

  constructor() {}
  ngOnInit(): void {
    this.addExamenForm = new FormGroup({
      score: new FormControl(""),
      timestamp: new FormControl("")
      
    });
  }
addExamen(){
  const score = this.addExamenForm.get("score")?.value;
  const timestamp = this.addExamenForm.get("timestamp")?.value;
  
  
}
}
