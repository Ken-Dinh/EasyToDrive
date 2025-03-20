import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthguardValidationService {

  private apiUrl = 'http://localhost/easytodrive/src/authguard-validation.php';

  constructor(private http: HttpClient) { }

  postAdmin(data: any) {
    return this.http.post<any>(this.apiUrl, data);
  }
}
