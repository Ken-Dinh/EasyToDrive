import { Component, OnInit } from '@angular/core';
import { Avis } from '../../model/avis'; // Assurez-vous d'importer le modèle Avis

@Component({
  selector: 'app-page-avis',
  templateUrl: './page-avis.component.html',
  standalone: false,
  styleUrls: ['./page-avis.component.css'],
})
export class PageAvisComponent implements OnInit {
  // Liste des avis
  listeAvis: Avis[] = [
    new Avis(1, 29, "Très bon service, je recommande !", "2023-10-01 08:20:50"),
    new Avis(2, 30, "Formateurs très compétents et à l'écoute.", "2023-10-05 10:30:00"),
    new Avis(3, 31, "Excellente auto-école, j'ai réussi mon permis du premier coup !", "2023-10-10 14:15:00"),
  ];

  ngOnInit(): void {
    // Vous pouvez charger les avis depuis une API ici si nécessaire
  }

  // Méthode pour ajouter un nouvel avis (exemple)
  ajouterAvis(nouvelAvis: Avis): void {
    this.listeAvis.push(nouvelAvis);
  }

  // Méthode pour obtenir la date par défaut
  getDefaultDate(): string {
    return new Date().toISOString();
  }
}