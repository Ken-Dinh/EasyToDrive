import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Eleve } from '../model/eleve';

@Injectable({
  providedIn: 'root'
})
export class EleveService {

  private apiUrl = 'http://localhost/easytodrive/src/eleve.php';

  constructor(private http: HttpClient) { }

  getEleve() {
    return this.http.get<Eleve[]>(this.apiUrl);
  }

  getEleveById(id: number) {
    return this.http.get<Eleve[]>(`${this.apiUrl}?id=${id}`);
  }

  postEleve(data: Eleve) {
    return this.http.post(this.apiUrl, data);
  }

  putEleve(data: Eleve) {
    return this.http.put(this.apiUrl, data);
  }
}
