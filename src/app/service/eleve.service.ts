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
    return this.http.get(this.apiUrl);
  }

  postEleve(data: any) {
    return this.http.post(this.apiUrl, data);
  }

  putEleve(data: any) {
    return this.http.put(this.apiUrl, data);
  }

  deleteEleve(data: any) {
    return this.http.delete(this.apiUrl, { body: data });
  }
}
