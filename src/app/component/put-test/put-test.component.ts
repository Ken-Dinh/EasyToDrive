import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Test } from '../../model/test';
import { TestService } from '../../service/test.service';
import { ActivatedRoute } from '@angular/router';
import { ExamenService } from '../../service/examen.service';
import { Examen } from '../../model/examen';

@Component({
  selector: 'app-put-test',
  templateUrl: './put-test.component.html',
  standalone: false,
  styleUrls: ['./put-test.component.css']
})
export class PutTestComponent implements OnInit {
  putTestForm!: FormGroup;
  testId!: number;
  listeExamen: Examen[] = [];
  message: string = "";
  test: Test = {};

  constructor(private testService: TestService, private examenService: ExamenService, private route: ActivatedRoute) {}
  
  ngOnInit(): void {
    this.putTestForm = new FormGroup({
      test_id: new FormControl({value: "", disabled: true}),
      examen_id: new FormControl(""),
      theme: new FormControl(""),
      date: new FormControl(""),
      score: new FormControl("")
    });

    this.route.params.subscribe(params => {
      this.testId = +params["id"];
      this.getTestById(this.testId);
    })

    this.getExamen();
  }

  getExamen() {
    this.examenService.getExamen().subscribe((response: any) => {
      this.listeExamen = response.examen;
    });
  }

  setTestForm() {
    this.putTestForm = new FormGroup({
      test_id: new FormControl({value: this.test.test_id, disabled: true}),
      examen_id: new FormControl(this.test.examen_id),
      theme: new FormControl(this.test.theme),
      date: new FormControl(this.test.date),
      score: new FormControl(this.test.score)
    });
  }

  getTestById(id: number) {
    this.testService.getTestById(id).subscribe((response: any) => {
      this.test = response.test;
      this.setTestForm();
    });
  }
 
  putTest() {
    const formattedDate = this.putTestForm.value.date.replace('T', ' ');
    const _test: Test = {...this.putTestForm.getRawValue(), date: formattedDate};

    this.testService.putTest(_test).subscribe((response: any) => {
      this.message = response.message;
    });
  }
}
