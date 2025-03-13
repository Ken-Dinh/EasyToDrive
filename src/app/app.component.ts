import { Component } from '@angular/core';
import { EleveService } from './service/eleve.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'EasyToDrive';
  data_eleve: string = "There is no data";
  post_eleve = {
    autoecole_id: 1,
    login: "John Doe",
    password: "123456",
    naissance: "1990-01-01",
    rue: "1 rue de la paix",
    cp: "75000",
    ville: "Paris",
    date_inscription: "2021-01-01 00:00:00",
    npeh: 20,
    note_etg: 0,
    validation_etg: false
  }

  constructor(private eleveService:EleveService){}

  ngOnInit(){
    this.getEleve();
    this.postEleve();
  }

  getEleve(){
    this.eleveService.getEleve().subscribe((data:any)=>{
      this.data_eleve = data.eleve[0].autoecole_id;
    });
  }

  postEleve(){
    this.eleveService.postEleve(this.post_eleve).subscribe((data:any)=>{
      console.log(data.message);
    });
  }
}
