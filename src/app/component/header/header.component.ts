import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { AuthService } from '../../service/auth.service';

@Component({
  selector: 'app-header',
  standalone: false,
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit {
  token: any;

  constructor(private authService: AuthService) {}

  ngOnInit(): void {
    this.authService.token$.subscribe((newToken) => {
      this.token = newToken;
    });

    this.token = this.authService.getToken();
  }
}
