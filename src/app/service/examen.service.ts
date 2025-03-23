import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Examen } from '../model/examen';
import { apiUrl } from '../model/api-url';

@Injectable({
  providedIn: 'root'
})
export class ExamenService {

  private apiUrl = `${apiUrl}/src/examen.php`;

  constructor(private http: HttpClient) { }

  getExamen() {
    return this.http.get<Examen[]>(this.apiUrl);
  }

  getExamenById(id: number) {
    return this.http.get<Examen[]>(`${this.apiUrl}?id=${id}`);
  }

  postExamen(data: Examen) {
    return this.http.post(this.apiUrl, data);
  }

  putExamen(data: Examen) {
    return this.http.put(this.apiUrl, data);
  }
  
}
