import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { LoginAutoecoleService } from '../../service/login-autoecole.service';
import { Router } from '@angular/router';
import { AutoEcole } from '../../model/auto-ecole';
import { redirect } from '../../model/redirect';
import { AuthguardValidationService } from '../../service/authguard-validation.service';
import { AuthService } from '../../service/auth.service';

@Component({
  selector: 'app-login-autoecole',
  standalone: false,
  templateUrl: './login-autoecole.component.html',
  styleUrl: './login-autoecole.component.css'
})
export class LoginAutoecoleComponent {
loginAutoecoleForm!: FormGroup;
  message: string = '';

  constructor(private loginAdminService: LoginAutoecoleService,
              private authguardValidationService: AuthguardValidationService,
              private route: Router,
              private authService: AuthService) {}

  ngOnInit(): void {
    this.loginAutoecoleForm = new FormGroup({
      login: new FormControl(''),
      password: new FormControl('')
    });
    redirect(this.authguardValidationService, this.route, this.authService);
  }

  login() {
    const _login = this.loginAutoecoleForm.get('login')?.value;
    const _password = this.loginAutoecoleForm.get('password')?.value;
    const _loginAdmin: AutoEcole = {
      nom: _login,
      password: _password
    }

    if (_login == '' || _password == '') {
      this.message = "Champs vides.";
      return;
    }

    this.loginAdminService.postAutoEcole(_loginAdmin).subscribe((response: any) => {
      if (!response.token) {
        this.message = "Identifiants incorrectes.";
        return;
      }

      this.authService.setToken(response.token);
      // this.route.navigate(["autoecole-dashboard"]);
    });
    
  }
}
