import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Eleve } from '../../model/eleve';
import { EleveService } from '../../service/eleve.service';
import { AutoecoleService } from '../../service/autoecole.service';
import { AutoEcole } from '../../model/auto-ecole';
import { formatDate } from '@angular/common';

@Component({
  selector: 'app-add-eleve',
  standalone: false,
  templateUrl: './add-eleve.component.html',
  styleUrl: './add-eleve.component.css'
})
export class AddEleveComponent implements OnInit {
  addEleveForm!: FormGroup;
  listeAutoEcole: AutoEcole[] = [];
  message: string = "";
  currentTimestamp: string = formatDate(new Date(), 'yyyy-MM-dd hh:mm:ss', 'fr');
  currentDate: string = formatDate(new Date(), 'yyyy-MM-dd', 'fr');

  constructor(private eleveService: EleveService, private autoEcoleService: AutoecoleService) {}

  ngOnInit(): void {
    this.addEleveForm = new FormGroup({
      autoecole_id: new FormControl(""),
      login: new FormControl(""),
      password: new FormControl(""),
      naissance: new FormControl(this.currentDate),
      rue: new FormControl(""),
      cp:  new FormControl(""),
      ville: new FormControl(""),
      date_inscription: new FormControl(this.currentTimestamp),
      neph: new FormControl(""),
      note_etg: new FormControl(""),
      validation_etg: new FormControl(false)
    });

    this.getAutoEcole();
  }

  getAutoEcole() {
    this.autoEcoleService.getAutoEcole().subscribe((response: any) => {
      this.listeAutoEcole = response.autoecole;
    });
  }

  addEleve(){
    const _eleve: Eleve = this.addEleveForm.value;
    this.eleveService.postEleve(_eleve).subscribe((response: any) => {
      this.message = response.message;
    });
  }
}


