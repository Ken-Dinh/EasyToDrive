import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Admin } from '../model/admin';

@Injectable({
  providedIn: 'root'
})
export class LoginAdminService {

  private apiUrl = 'http://localhost/easytodrive/src/login-admin.php';

  constructor(private http: HttpClient) { }

  postAdmin(data: Admin) {
    return this.http.post<Admin>(this.apiUrl, data);
  }
}
