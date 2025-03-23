import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Test } from '../model/test';
import { apiUrl } from '../model/api-url';

@Injectable({
  providedIn: 'root'
})
export class TestService {

  private apiUrl = `${apiUrl}/src/test.php`;

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
