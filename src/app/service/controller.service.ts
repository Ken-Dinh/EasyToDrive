import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ControllerService {

  private apiUrl = 'http://localhost/easytodrive/src/delete_controller.php';

  constructor(private http: HttpClient) { }

  put(data: any) {
    return this.http.put(this.apiUrl, data);
  }

  delete(data: any) {
    return this.http.delete(this.apiUrl, { body: data });
  }
}
