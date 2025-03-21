import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-put-test',
  templateUrl: './put-test.component.html',
  standalone: false,
  styleUrls: ['./put-test.component.css']
})
export class PutTestComponent implements OnInit {
  
  putTestForm!: FormGroup;

  
  listeTest = [{
    test_id: 13,
    date: "2023-11-14",
    score: 12.5,
    theme: "Signalisation"
  }];

  
  ngOnInit(): void {
    this.putTestForm = new FormGroup({
      score: new FormControl(this.listeTest[0].score), 
      date: new FormControl(this.listeTest[0].date),   
      theme: new FormControl(this.listeTest[0].theme)  
    });
  }

 
  putTest() {
    const score = this.putTestForm.get("score")?.value;
    const date = this.putTestForm.get("date")?.value;
    const theme = this.putTestForm.get("theme")?.value;
    console.log({ score, date, theme }); 
  }
}
