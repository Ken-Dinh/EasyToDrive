import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-login-eleve',
  standalone: false,
  templateUrl: './login-eleve.component.html',
  styleUrl: './login-eleve.component.css',
})
export class LoginEleveComponent implements OnInit {
  loginEleveForm!: FormGroup;

  constructor() {}

  ngOnInit() {
    this.loginEleveForm = new FormGroup({
      login: new FormControl(''),
      password: new FormControl('')
    });
  }

  login() {
    const login = this.loginEleveForm.get('login')?.value;
    const password = this.loginEleveForm.get('password')?.value;
  }
}
