import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Eleve } from '../model/eleve';

@Injectable({
  providedIn: 'root'
})
export class LoginEleveService {

  private apiUrl = 'http://localhost/easytodrive/src/login-eleve.php';

  constructor(private http: HttpClient) { }

  postEleve(data: Eleve) {
    return this.http.post<Eleve>(this.apiUrl, data);
  }
}
