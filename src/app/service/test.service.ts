import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Test } from '../model/test';

@Injectable({
  providedIn: 'root'
})
export class TestService {

  private apiUrl = 'http://localhost/easytodrive/src/test.php';

  constructor(private http: HttpClient) { }

  getTest() {
    return this.http.get<Test[]>(this.apiUrl);
  }

  getTestById(id: number) {
    return this.http.get<Test[]>(`${this.apiUrl}?id=${id}`);
  }

  postTest(data: Test) {
    return this.http.post(this.apiUrl, data);
  }

  putTest(data: Test) {
    return this.http.put(this.apiUrl, data);
  }
}
