import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Examen } from '../model/examen';

@Injectable({
  providedIn: 'root'
})
export class ExamenService {

  private apiUrl = 'http://localhost/easytodrive/src/examen.php';

  constructor(private http: HttpClient) { }

  getExamen() {
    return this.http.get<Examen[]>(this.apiUrl);
  }

  postExamen(data: Examen) {
    return this.http.post(this.apiUrl, data);
  }
  
}
