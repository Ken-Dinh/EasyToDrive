import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { apiUrl } from '../model/api-url';

@Injectable({
  providedIn: 'root'
})
export class AuthguardValidationService {

  private apiUrl = `${apiUrl}/src/authguard-validation.php`;

  constructor(private http: HttpClient) { }

  postValidateToken(data: any) {
    return this.http.post<any>(this.apiUrl, data);
  }
}
