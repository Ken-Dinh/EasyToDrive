import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { apiUrl } from '../model/api-url';

@Injectable({
  providedIn: 'root'
})
export class ControllerService {

  private apiUrl = `${apiUrl}/src/delete_controller.php`;

  constructor(private http: HttpClient) { }

  delete(data: any) {
    return this.http.delete(this.apiUrl, { body: data });
  }
}
