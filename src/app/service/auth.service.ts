import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private tokenSubject = new BehaviorSubject<any>(this.getToken())
  token$ = this.tokenSubject.asObservable();

  getToken() {
    return localStorage.getItem("token");
  }

  setToken(token: any) {
    localStorage.setItem("token", token);
    this.tokenSubject.next(token);
  }

  clearToken() {
    localStorage.removeItem("token");
    this.tokenSubject.next('');
  }
}
