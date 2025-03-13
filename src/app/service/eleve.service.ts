import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EleveService {

  constructor(private http: HttpClient) { }

  getEleve(){
    return this.http.get('http://localhost/easytodrive/src/eleve.php');
  }

  postEleve(data:any){
    return this.http.post('http://localhost/easytodrive/src/eleve.php', data);
  }

  putEleve(data:any){
    return this.http.put('http://localhost/easytodrive/src/eleve.php', data);
  }

  deleteEleve(data:any){
    return this.http.delete('http://localhost/easytodrive/src/eleve.php', data);
  }
}
