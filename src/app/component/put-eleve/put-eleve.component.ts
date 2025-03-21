import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { EleveService } from '../../service/eleve.service';
import { Eleve } from '../../model/eleve';

@Component({
  selector: 'app-put-eleve',
  standalone: false,
  templateUrl: './put-eleve.component.html',
  styleUrl: './put-eleve.component.css'
})
export class PutEleveComponent {
  putEleveForm!: FormGroup;

  listeEleve?: Eleve[] = [{
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
    this.eleveService.getEleve().subscribe()

    this.putEleveForm = new FormGroup({
      login: new FormControl(""),
      password: new FormControl(""),
      birthday: new FormControl(""),
      rue: new FormControl(""),
      cp:  new FormControl(""),
      ville: new FormControl(""),
      dateInscription: new FormControl(""),
      neph: new FormControl(""),
      etg: new FormControl(""),
      valietg: new FormControl("")
    });
  }
putEleve(){
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
  
}
}


