import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AutoEcole } from '../model/auto-ecole';


@Injectable({
  providedIn: 'root'
})
export class LoginAutoecoleService {

  private apiUrl = 'http://localhost/easytodrive/src/login-autoecole.php';

  constructor(private http: HttpClient) { }

  postAutoEcole(data: AutoEcole) {
    return this.http.post<AutoEcole>(this.apiUrl, data);
  }
}
