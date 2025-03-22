import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../service/auth.service';

@Component({
  selector: 'app-logout',
  standalone: false,
  templateUrl: './logout.component.html',
  styleUrl: './logout.component.css'
})
export class LogoutComponent {
  token: any = localStorage.getItem("token");

  constructor(private route: Router, private authService: AuthService) {}

  logout() {
    if (!this.token) {
      return;
    }

    localStorage.removeItem("token");
    this.route.navigate(["/"]);
    this.authService.clearToken();
  }

  
}
