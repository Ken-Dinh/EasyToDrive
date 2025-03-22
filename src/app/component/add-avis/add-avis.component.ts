import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Avis } from '../../model/avis';


@Component({
  selector: 'app-add-avis',
  standalone: false,
  templateUrl: './add-avis.component.html',
  styleUrl: './add-avis.component.css'
})

export  class AddAvisComponent {


}

/* implements OnInit {
  addAvisForm!: FormGroup;


  constructor(private avisService: AvisService) {}

  ngOnInit(): void {
    this.addAvisForm = new FormGroup({
      contenu: new FormControl("")
    });
  }

  addAvis() {
    const contenu = this.addAvisForm.get("contenu")?.value;

    const _avis: Avis = {
      eleve_id: 1, 
      contenu: contenu,
      date_publication: new Date().toISOString() 
    }

    console.log(_avis);

    this.avisService.postAvis(_avis).subscribe((data: any) => {
      alert(data.message);
    });
  }*/