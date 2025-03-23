import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Avis } from '../model/avis';

@Injectable({
  providedIn: 'root'
})
export class AvisService {

  private apiUrl = 'http://localhost/easytodrive/src/avis.php';

  constructor(private http: HttpClient) { }

  getAvis() {
    return this.http.get<Avis[]>(this.apiUrl);
  }

  postAvis(avis: Avis, token: any) {
    return this.http.post<Avis[]>(this.apiUrl, {avis, token});
  }
}
