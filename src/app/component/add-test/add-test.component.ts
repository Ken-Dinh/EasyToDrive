import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-add-test',
  standalone: false,
  templateUrl: './add-test.component.html',
  styleUrl: './add-test.component.css'
})
export class AddTestComponent {
  addTestForm!: FormGroup;

  constructor() {}
  ngOnInit(): void {
    this.addTestForm = new FormGroup({
      score: new FormControl(""),
      timestamp: new FormControl(""),
      theme: new FormControl("")
    });
  }
addTest(){
  const score = this.addTestForm.get("score")?.value;
  const timestamp = this.addTestForm.get("timestamp")?.value;
  const theme = this.addTestForm.get("theme")?.value;
  
}
}
