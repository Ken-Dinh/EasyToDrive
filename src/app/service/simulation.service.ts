import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Simulation } from '../model/simulation';

@Injectable({
  providedIn: 'root'
})
export class SimulationService {

  private apiUrl = 'http://localhost/easytodrive/src/simulation.php';

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
