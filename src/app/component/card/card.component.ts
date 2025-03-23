import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  standalone: false,
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
})
export class CardComponent {
  @Input() contenu: string = 'Aucun commentaire'; // Valeur par défaut
  @Input() date: string = new Date().toISOString(); // Valeur par défaut (date actuelle)
}