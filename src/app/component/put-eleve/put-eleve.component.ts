import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { EleveService } from '../../service/eleve.service';
import { Eleve } from '../../model/eleve';

@Component({
  selector: 'app-put-eleve',
  templateUrl: './put-eleve.component.html',
  standalone: false,
  styleUrls: ['./put-eleve.component.css']
})
export class PutEleveComponent implements OnInit {
  
  putEleveForm!: FormGroup;

  listeEleve: Eleve[] = [{
      eleve_id: 29,
      login: "liam.cheurfa",
      password: "liam123",
      naissance: "2005-03-29",
      rue: "51 rue jean jaurès",
      cp: 93470,
      ville: "Coubron",
      date_inscription: "2023-08-21",
      neph: "563899279407",
      note_etg: "14.5",
      validation_etg: true,
      
    }]

  constructor(private eleveService: EleveService) {}

  
  ngOnInit(): void {
    this.putEleveForm = new FormGroup({
      login: new FormControl(this.listeEleve[0].login),
      password: new FormControl(this.listeEleve[0].password),
      birthday: new FormControl(this.listeEleve[0].naissance),
      rue: new FormControl(this.listeEleve[0].rue),
      cp: new FormControl(this.listeEleve[0].cp),
      ville: new FormControl(this.listeEleve[0].ville),
      dateInscription: new FormControl(this.listeEleve[0].date_inscription),
      neph: new FormControl(this.listeEleve[0].neph),
      etg: new FormControl(this.listeEleve[0].note_etg),
      valietg: new FormControl(this.listeEleve[0].validation_etg)
    });
  }

  
  putEleve() {
    const login = this.putEleveForm.get("login")?.value;
    const password = this.putEleveForm.get("password")?.value;
    const birthday = this.putEleveForm.get("birthday")?.value;
    const rue = this.putEleveForm.get("rue")?.value;
    const cp = this.putEleveForm.get("cp")?.value;
    const ville = this.putEleveForm.get("ville")?.value;
    const dateInscription = this.putEleveForm.get("dateInscription")?.value;
    const neph = this.putEleveForm.get("neph")?.value;
    const etg = this.putEleveForm.get("etg")?.value;
    const valietg = this.putEleveForm.get("valietg")?.value;

    console.log({ login, password, birthday, rue, cp, ville, dateInscription, neph, etg, valietg });
  }
}