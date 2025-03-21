import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-put-examen',
  templateUrl: './put-examen.component.html',
  standalone: false,
  styleUrls: ['./put-examen.component.css']
})
export class PutExamenComponent implements OnInit {
  
  putExamenForm!: FormGroup;

  
  listeExamen = [{
    examen_id: 99,
    date: "2025-11-29",
    score: 17.5
  }];

  
  ngOnInit(): void {
    this.putExamenForm = new FormGroup({
      score: new FormControl(this.listeExamen[0].score), 
      date: new FormControl(this.listeExamen[0].date)   
    });
  }

  
  putExamen() {
    const score = this.putExamenForm.get("score")?.value;
    const date = this.putExamenForm.get("date")?.value;
    console.log({ score, date }); 
  }
}