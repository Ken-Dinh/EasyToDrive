import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Examen } from '../../model/examen';
import { ExamenService } from '../../service/examen.service';
import { formatDate } from '@angular/common';

@Component({
  selector: 'app-add-examen',
  standalone: false,
  templateUrl: './add-examen.component.html',
  styleUrl: './add-examen.component.css'
})
export class AddExamenComponent {
  addExamenForm!: FormGroup;
  message: string = "";
  currentDate: string = formatDate(new Date(), 'yyyy-MM-dd hh:mm:ss', 'fr');

  constructor(private examenService: ExamenService) {}
  ngOnInit(): void {
    this.addExamenForm = new FormGroup({
      score: new FormControl(""),
      date: new FormControl(this.currentDate)
    });
  }

  addExamen(){
    const _examen: Examen = this.addExamenForm.value;

    this.examenService.postExamen(_examen).subscribe((response: any) => {
      this.message = response.message;
    });
  }
}
