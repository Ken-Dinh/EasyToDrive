import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Avis } from '../../model/avis';
import { AvisService } from '../../service/avis.service';
import { formatDate } from '@angular/common';


@Component({
  selector: 'app-add-avis',
  standalone: false,
  templateUrl: './add-avis.component.html',
  styleUrl: './add-avis.component.css'
})

export  class AddAvisComponent implements OnInit {
  addAvisForm!: FormGroup;
  currentTimestamp: string = formatDate(new Date(), 'yyyy-MM-dd hh:mm:ss', 'fr');
  message: string = '';
  token: any = localStorage.getItem("token");

  constructor(private avisService: AvisService) {}

  ngOnInit(): void {
    this.addAvisForm = new FormGroup({
      contenu: new FormControl("")
    });
  }

  addAvis() {
    const contenu = this.addAvisForm.get("contenu")?.value;

    const _avis: Avis = {
      contenu: contenu,
      date_publication: this.currentTimestamp
    }

    this.avisService.postAvis(_avis, this.token).subscribe((response: any) => {
      this.message = response.message;
    });
  }
}