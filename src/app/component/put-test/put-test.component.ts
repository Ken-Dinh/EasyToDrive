import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { Test } from '../../model/test';

@Component({
  selector: 'app-put-test',
  standalone: false,
  templateUrl: './put-test.component.html',
  styleUrl: './put-test.component.css'
})
export class PutTestComponent {
  putTestForm!: FormGroup;
  
   listeTest?: Test[] = [{
      test_id: 13,
      date: "2023-11-14", 
      score: 12.5,
      theme: "Signalisation"
    }]

  constructor() {}
  ngOnInit(): void {
    this.putTestForm = new FormGroup({
      score: new FormControl(""),
      timestamp: new FormControl(""),
      theme: new FormControl("")
    });
  }
putTest(){
  const score = this.putTestForm.get("score")?.value;
  const timestamp = this.putTestForm.get("timestamp")?.value;
  const theme = this.putTestForm.get("theme")?.value;
  
}
}
