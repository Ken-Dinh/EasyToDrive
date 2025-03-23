import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AutoEcole } from '../model/auto-ecole';
import { apiUrl } from '../model/api-url';

@Injectable({
  providedIn: 'root'
})
export class AutoecoleService {

  private apiUrl = `${apiUrl}/src/autoecole.php`;

  constructor(private http: HttpClient) { }

  getAutoEcole() {
    return this.http.get<AutoEcole[]>(this.apiUrl);
  }
}
