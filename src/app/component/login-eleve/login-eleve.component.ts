import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { LoginEleveService } from '../../service/login-eleve.service';
import { Eleve } from '../../model/eleve';

@Component({
  selector: 'app-login-eleve',
  standalone: false,
  templateUrl: './login-eleve.component.html',
  styleUrl: './login-eleve.component.css',
})
export class LoginEleveComponent implements OnInit {
  loginEleveForm!: FormGroup;
  loginEleve: Eleve = {};

  constructor(private loginEleveService: LoginEleveService) {}

  ngOnInit() {
    this.loginEleveForm = new FormGroup({
      login: new FormControl(''),
      password: new FormControl('')
    });
  }

  postEleve(data: any) {
    let _password = data.password;
    this.loginEleveService.postEleve(data).subscribe((data: any) => {
      this.loginEleve = data.eleve;

      if (this.loginEleve == undefined) {
        alert("Nothing found in the database");
        return;
      }
  
      if (this.loginEleve.password != _password) {
        alert("Password Incorrect");
        return;
      }

      alert("Success");
    });
    
  }

  login() {
    const _login = this.loginEleveForm.get('login')?.value;
    const _password = this.loginEleveForm.get('password')?.value;
    const _loginEleve: Eleve = {
      login: _login,
      password: _password
    };

    if (_login == '' || _password == '') {
      alert("Login/Password is empty")
      return;
    }
    this.postEleve(_loginEleve);
  }
}
