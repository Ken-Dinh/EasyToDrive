import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Eleve } from '../../model/eleve';
import { EleveService } from '../../service/eleve.service';
import { AutoecoleService } from '../../service/autoecole.service';
import { AutoEcole } from '../../model/auto-ecole';

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

  constructor(private eleveService: EleveService, private autoEcoleService: AutoecoleService) {}

  ngOnInit(): void {
    this.addEleveForm = new FormGroup({
      login: new FormControl(""),
      password: new FormControl(""),
      autoecole_id: new FormControl(""),
      birthday: new FormControl(""),
      rue: new FormControl(""),
      cp:  new FormControl(""),
      ville: new FormControl(""),
      dateInscription: new FormControl(""),
      neph: new FormControl(""),
      etg: new FormControl(""),
      valietg: new FormControl("")
    });

    this.getAutoEcole();
  }

  getAutoEcole() {
    this.autoEcoleService.getAutoEcole().subscribe((response: any) => {
      this.listeAutoEcole = response.autoecole;
    });
  }

  addEleve(){
    const login = this.addEleveForm.get("login")?.value;
    const password = this.addEleveForm.get("password")?.value;
    const autoecole_id = this.addEleveForm.get("autoecole_id")?.value;
    const birthday = this.addEleveForm.get("birthday")?.value;
    const rue = this.addEleveForm.get("rue")?.value;
    const cp = this.addEleveForm.get("cp")?.value;
    const ville = this.addEleveForm.get("ville")?.value;
    const dateInscription = this.addEleveForm.get("dateInscription")?.value;
    const neph = this.addEleveForm.get("neph")?.value;
    const etg = this.addEleveForm.get("etg")?.value;
    const valietg = this.addEleveForm.get("valietg")?.value;
    
    const _eleve: Eleve = {
      autoecole_id: parseInt(autoecole_id),
      login: login,
      password: password,
      naissance: birthday,
      rue: rue,
      cp: parseInt(cp),
      ville: ville,
      date_inscription: dateInscription,
      neph: neph,
      note_etg: etg,
      validation_etg: valietg
    }

    this.eleveService.postEleve(_eleve).subscribe((data: any) => {
      this.message = data.message;
    });
  }
}


