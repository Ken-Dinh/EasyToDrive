import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AutoEcole } from '../model/auto-ecole';
import { apiUrl } from '../model/api-url';


@Injectable({
  providedIn: 'root'
})
export class LoginAutoecoleService {

  private apiUrl = `${apiUrl}/src/login-autoecole.php`;

  constructor(private http: HttpClient) { }

  postAutoEcole(data: AutoEcole) {
    return this.http.post<AutoEcole>(this.apiUrl, data);
  }
}
