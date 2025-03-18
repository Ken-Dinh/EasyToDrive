import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-add-eleve',
  standalone: false,
  templateUrl: './add-eleve.component.html',
  styleUrl: './add-eleve.component.css'
})
export class AddEleveComponent {
  addEleveForm!: FormGroup;

  constructor() {}
  ngOnInit(): void {
    this.addEleveForm = new FormGroup({
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

  addEleve(){
    const login = this.addEleveForm.get("login")?.value;
    const password = this.addEleveForm.get("password")?.value;
    const birthday = this.addEleveForm.get("birthday")?.value;
    const rue = this.addEleveForm.get("rue")?.value;
    const cp = this.addEleveForm.get("cp")?.value;
    const ville = this.addEleveForm.get("ville")?.value;
    const dateInscription = this.addEleveForm.get("dateInscription")?.value;
    const neph = this.addEleveForm.get("neph")?.value;
    const etg = this.addEleveForm.get("etg")?.value;
    const valietg = this.addEleveForm.get("valietg")?.value;
    
  }
}


