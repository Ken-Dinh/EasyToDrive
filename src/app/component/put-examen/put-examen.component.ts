import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Examen } from '../../model/examen';
import { ExamenService } from '../../service/examen.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-put-examen',
  templateUrl: './put-examen.component.html',
  standalone: false,
  styleUrls: ['./put-examen.component.css']
})
export class PutExamenComponent implements OnInit {
  putExamenForm!: FormGroup;
  examenId!: number;
  message: string = "";
  examen: Examen = {};

  constructor(private examenService: ExamenService, private route: ActivatedRoute) {}
  
  ngOnInit(): void {
    this.putExamenForm = new FormGroup({
      examen_id: new FormControl({disabled: true}),
      score: new FormControl(""), 
      date: new FormControl("")   
    });

    this.route.params.subscribe(params => {
      this.examenId = +params["id"];
      this.getExamenById(this.examenId);
    })
  }

  setExamenForm() {
    this.putExamenForm = new FormGroup({
      examen_id: new FormControl({value: this.examen.examen_id, disabled: true}),
      score: new FormControl(this.examen.score), 
      date: new FormControl(this.examen.date)   
    });
  }

  getExamenById(id: number) {
    this.examenService.getExamenById(id).subscribe((response: any) => {
      this.examen = response.examen;
      this.setExamenForm();
    });
  }

  putExamen() {
    const _examen: Examen = this.putExamenForm.getRawValue();

    this.examenService.putExamen(_examen).subscribe((response: any) => {
      this.message = response.message;
    });
  }
}