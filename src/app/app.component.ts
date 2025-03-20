import { Component } from '@angular/core';
import { EleveService } from './service/eleve.service';
import { Eleve } from './model/eleve';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'EasyToDrive';

  constructor(){}
  
}
