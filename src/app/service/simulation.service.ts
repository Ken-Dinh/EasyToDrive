import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Simulation } from '../model/simulation';
import { apiUrl } from '../model/api-url';

@Injectable({
  providedIn: 'root'
})
export class SimulationService {

  private apiUrl = `${apiUrl}/src/simulation.php`;

  constructor(private http: HttpClient) { }

  getSimulation() {
    return this.http.get<Simulation[]>(this.apiUrl);
  }

  getSimulationById(id: number) {
    return this.http.get<Simulation[]>(`${this.apiUrl}?id=${id}`);
  }

  postSimulation(data: Simulation) {
    return this.http.post(this.apiUrl, data);
  }

  putSimulation(data: Simulation) {
    return this.http.put(this.apiUrl, data);
  }
}
