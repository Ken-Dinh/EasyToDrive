import { Component, OnInit } from '@angular/core';
import { Avis } from '../../model/avis'; // Assurez-vous d'importer le modèle Avis
import { AvisService } from '../../service/avis.service';

@Component({
  selector: 'app-page-avis',
  templateUrl: './page-avis.component.html',
  standalone: false,
  styleUrls: ['./page-avis.component.css'],
})
export class PageAvisComponent implements OnInit {
  listeAvis: Avis[] = [];

  constructor(private avisService: AvisService) {}

  ngOnInit(): void {
    this.getAvis();
  }
  
  getAvis() {
    this.avisService.getAvis().subscribe((response: any) => {
      this.listeAvis = response.avis;
    });
  }

  ajouterAvis(nouvelAvis: Avis): void {
    this.listeAvis.push(nouvelAvis);
  }

  getDefaultDate(): string {
    return new Date().toISOString();
  }
}