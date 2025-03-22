import { Component, OnInit } from '@angular/core';
import { AuthguardValidationService } from '../../service/authguard-validation.service';
import { Router } from '@angular/router';
import { redirect } from '../../model/redirect';
import { AuthService } from '../../service/auth.service';

@Component({
  selector: 'app-page-accueil',
  standalone: false,
  templateUrl: './page-accueil.component.html',
  styleUrl: './page-accueil.component.css',
  
})
export class PageAccueilComponent implements OnInit {

  constructor(private authguardValidationService: AuthguardValidationService, private route: Router, private authService: AuthService) {}
  
  ngOnInit(): void {
    redirect(this.authguardValidationService, this.route, this.authService);
  }

}
