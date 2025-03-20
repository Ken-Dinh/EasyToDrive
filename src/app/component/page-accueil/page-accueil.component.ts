import { Component, OnInit } from '@angular/core';
import { AuthguardValidationService } from '../../service/authguard-validation.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-page-accueil',
  standalone: false,
  templateUrl: './page-accueil.component.html',
  styleUrl: './page-accueil.component.css',
  
})
export class PageAccueilComponent implements OnInit {
  token: any = localStorage.getItem("token");

  constructor(private authguardValidationService: AuthguardValidationService, private route: Router) {}
  
  ngOnInit(): void {
    if (this.token) {
      this.redirect(this.token);
    }
  }

  redirect(token: any) {
    this.authguardValidationService.postValidateToken({token: token}).subscribe((response: any) => {
      if (!response.role) {
        localStorage.removeItem("token");
        return;
      }

      this.route.navigate([response.role + "-dashboard"]);
    })
  }
}
