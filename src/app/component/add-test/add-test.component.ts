import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Test } from '../../model/test';
import { Examen } from '../../model/examen';
import { formatDate } from '@angular/common';
import { ExamenService } from '../../service/examen.service';
import { TestService } from '../../service/test.service';

@Component({
  selector: 'app-add-test',
  standalone: false,
  templateUrl: './add-test.component.html',
  styleUrl: './add-test.component.css'
})
export class AddTestComponent {
  addTestForm!: FormGroup;
  listeExamen: Examen[] = [];
  message: string = "";
  currentDate: string = formatDate(new Date(), 'yyyy-MM-dd', 'fr');

  constructor(private examenService: ExamenService, private testService: TestService) {}

  ngOnInit(): void {
    this.addTestForm = new FormGroup({
      examen_id: new FormControl(""),
      theme: new FormControl(""),
      date: new FormControl(this.currentDate),
      score: new FormControl("")
    });

    this.getExamen();
  }

  getExamen() {
    this.examenService.getExamen().subscribe((response: any) => {
      this.listeExamen = response.examen;
    });
  }

  addTest(){
    const _test: Test = this.addTestForm.value;
    this.testService.postTest(_test).subscribe((response: any) => {
      this.message = response.message;
    });
  }
}
