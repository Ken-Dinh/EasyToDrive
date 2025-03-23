import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Admin } from '../model/admin';
import { apiUrl } from '../model/api-url';

@Injectable({
  providedIn: 'root'
})
export class LoginAdminService {

  private apiUrl = `${apiUrl}/src/login-admin.php`;

  constructor(private http: HttpClient) { }

  postAdmin(data: Admin) {
    return this.http.post<Admin>(this.apiUrl, data);
  }
}
