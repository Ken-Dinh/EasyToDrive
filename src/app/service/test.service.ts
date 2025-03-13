import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TestService {

  constructor(private http:HttpClient) { }

  getTest(){
    return this.http.get('http://localhost/easytodrive/src/test.php');
  }

  postTest(data:any){
    return this.http.post('http://localhost/easytodrive/src/test.php', data);
  }

  putTest(data:any){
    return this.http.put('http://localhost/easytodrive/src/test.php', data);
  }

  deleteTest(data:any){
    return this.http.delete('http://localhost/easytodrive/src/test.php', data);
  }

  optionTest(){
    return this.http.options('http://localhost/easytodrive/src/test.php');
  }
}
