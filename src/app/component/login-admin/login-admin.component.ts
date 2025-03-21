import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginAdminService } from '../../service/login-admin.service';
import { Admin } from '../../model/admin';

@Component({
  selector: 'app-login-admin',
  standalone: false,
  templateUrl: './login-admin.component.html',
  styleUrl: './login-admin.component.css'
})
export class LoginAdminComponent implements OnInit {
  loginAdminForm!: FormGroup;
  message: string = '';

  constructor(private loginAdminService: LoginAdminService, private route: Router) {}

  ngOnInit(): void {
    this.loginAdminForm = new FormGroup({
      login: new FormControl(''),
      password: new FormControl('')
    });
  }

  login() {
    const _login = this.loginAdminForm.get('login')?.value;
    const _password = this.loginAdminForm.get('password')?.value;
    const _loginAdmin: Admin = {
      login: _login,
      password: _password
    }

    if (_login == '' || _password == '') {
      this.message = "Champs vides.";
      return;
    }

    this.loginAdminService.postAdmin(_loginAdmin).subscribe((response: any) => {
      if (!response.token) {
        this.message = "Identifiants incorrectes.";
        return;
      }

      localStorage.setItem("token", response.token);
      this.route.navigate(["admin-dashboard"]);
    });
  }
}
