import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { EleveService } from '../../service/eleve.service';
import { Eleve } from '../../model/eleve';
import { AutoEcole } from '../../model/auto-ecole';
import { AutoecoleService } from '../../service/autoecole.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-put-eleve',
  templateUrl: './put-eleve.component.html',
  standalone: false,
  styleUrls: ['./put-eleve.component.css']
})
export class PutEleveComponent implements OnInit {
  putEleveForm!: FormGroup;
  eleveId!: number;
  listeAutoEcole: AutoEcole[] = [];
  message: string = "";
  eleve: Eleve = {};

  constructor(private eleveService: EleveService, private autoEcoleService: AutoecoleService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.putEleveForm = new FormGroup({
      eleve_id: new FormControl({value: "", disabled: true}),
      login: new FormControl(""),
      password: new FormControl(""),
      autoecole_id: new FormControl(""),
      naissance: new FormControl(""),
      rue: new FormControl(""),
      cp: new FormControl(""),
      ville: new FormControl(""),
      date_inscription: new FormControl(""),
      neph: new FormControl(""),
      note_etg: new FormControl(""),
      validation_etg: new FormControl(false)
    });
    
    this.route.params.subscribe(params => {
      this.eleveId = +params["id"];
      this.getEleveById(this.eleveId);
    });

    this.getAutoecole();
  }

  getAutoecole() {
    this.autoEcoleService.getAutoEcole().subscribe((response: any) => {
      this.listeAutoEcole = response.autoecole;
    });
  }

  setEleveForm() {
    this.putEleveForm = new FormGroup({
      eleve_id: new FormControl({value: this.eleve.eleve_id, disabled: true}),
      login: new FormControl(this.eleve.login),
      password: new FormControl(""),
      autoecole_id: new FormControl(this.eleve.autoecole_id),
      naissance: new FormControl(this.eleve.naissance),
      rue: new FormControl(this.eleve.rue),
      cp: new FormControl(this.eleve.cp),
      ville: new FormControl(this.eleve.ville),
      date_inscription: new FormControl(this.eleve.date_inscription),
      neph: new FormControl(this.eleve.neph),
      note_etg: new FormControl(this.eleve.note_etg),
      validation_etg: new FormControl(this.eleve.validation_etg)
    });
  }

  getEleveById(id: number) {
    this.eleveService.getEleveById(id).subscribe((response: any) => {
      this.eleve = response.eleve;
      this.setEleveForm();
    });
  }
  
  putEleve() {
    const formattedDate = this.putEleveForm.value.date_inscription.replace('T', ' ');
    const _eleve: Eleve = {...this.putEleveForm.getRawValue(), date_inscription: formattedDate};

    this.eleveService.putEleve(_eleve).subscribe((response: any) => {
      this.message = response.message;
    });
  }
}