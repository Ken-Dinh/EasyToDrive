import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { LoginEleveService } from '../../service/login-eleve.service';
import { Eleve } from '../../model/eleve';
import { Router } from '@angular/router';
import { AuthguardValidationService } from '../../service/authguard-validation.service';
import { redirect } from '../../model/redirect';

@Component({
  selector: 'app-login-eleve',
  standalone: false,
  templateUrl: './login-eleve.component.html',
  styleUrl: './login-eleve.component.css',
})
export class LoginEleveComponent implements OnInit {
  loginEleveForm!: FormGroup;
  message: string = '';

  constructor(private loginEleveService: LoginEleveService, private authguardValidationService: AuthguardValidationService, private route: Router) {}

  ngOnInit(): void {
    this.loginEleveForm = new FormGroup({
      login: new FormControl(''),
      password: new FormControl('')
    });
    
    redirect(this.authguardValidationService, this.route);
  }

  login() {
    const _login = this.loginEleveForm.get('login')?.value;
    const _password = this.loginEleveForm.get('password')?.value;
    const _loginEleve: Eleve = {
      login: _login,
      password: _password
    };

    if (_login == '' || _password == '') {
      this.message = "Champs vides.";
      return;
    }

    this.loginEleveService.postEleve(_loginEleve).subscribe((response: any) => {
      if (!response.token) {
        this.message = "Identifiants incorrectes.";
        return;
      }

      localStorage.setItem("token", response.token);
      this.route.navigate(["eleve-dashboard"]);
    });
  }
}
