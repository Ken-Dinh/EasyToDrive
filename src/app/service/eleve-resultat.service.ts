import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EleveResultatService {

  private apiUrl = 'http://localhost/easytodrive/src/eleve_resultat.php';

  constructor(private http: HttpClient) { }

  getEleveResult(token: any) {
    return this.http.post(this.apiUrl, token);
  }
}
