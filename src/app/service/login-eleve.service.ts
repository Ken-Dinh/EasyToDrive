import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Eleve } from '../model/eleve';
import { apiUrl } from '../model/api-url';

@Injectable({
  providedIn: 'root'
})
export class LoginEleveService {

  private apiUrl = `${apiUrl}/src/login-eleve.php`;

  constructor(private http: HttpClient) { }

  postEleve(data: Eleve) {
    return this.http.post<Eleve>(this.apiUrl, data);
  }
}
