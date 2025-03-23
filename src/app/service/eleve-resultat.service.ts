import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Eleve } from '../model/eleve';
import { apiUrl } from '../model/api-url';

@Injectable({
  providedIn: 'root'
})
export class EleveResultatService {

  private apiUrl = `${apiUrl}/src/eleve_resultat.php`;

  constructor(private http: HttpClient) { }

  getEleveResult(token: any) {
    return this.http.post(`${this.apiUrl}?mode=result`, token);
  }

  getEleveResultById(eleve_id: any) {
    return this.http.post(`${this.apiUrl}?mode=resultById`, eleve_id);
  }

  getEleve(token: any) {
    return this.http.post<Eleve[]>(`${this.apiUrl}?mode=eleve`, token);
  }
}
