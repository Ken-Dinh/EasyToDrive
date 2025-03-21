import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AutoEcole } from '../model/auto-ecole';

@Injectable({
  providedIn: 'root'
})
export class AutoecoleService {

  private apiUrl = 'http://localhost/easytodrive/src/autoecole.php';

  constructor(private http: HttpClient) { }

  getAutoEcole() {
    return this.http.get<AutoEcole[]>(this.apiUrl);
  }
}
