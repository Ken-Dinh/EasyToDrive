import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Avis } from '../model/avis';
import { apiUrl } from '../model/api-url';

@Injectable({
  providedIn: 'root'
})
export class AvisService {

  private apiUrl = `${apiUrl}/src/avis.php`;

  constructor(private http: HttpClient) { }

  getAvis() {
    return this.http.get<Avis[]>(this.apiUrl);
  }

  postAvis(avis: Avis, token: any) {
    return this.http.post<Avis[]>(this.apiUrl, {avis, token});
  }
}
