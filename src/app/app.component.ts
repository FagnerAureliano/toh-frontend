import { Component } from '@angular/core';
import { MenuItem } from './core/models/menu-item.model';
import { Observable } from 'rxjs';
import { AuthService } from './auth/services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  isLoggedIn$: Observable<boolean>;
  title = 'Tour of Heroes';
  menuItems: MenuItem[] = [
    {
      matIcon: 'dashboard',
      routerLink: '/dashboard',
      tooltipText: 'Dashboard',
    },
    {
      fasIcon: 'mask',
      routerLink: '/heroes',
      tooltipText: 'Heroes',
    },
  ];

  constructor(private authService: AuthService) {
    this.isLoggedIn$ = this.authService.isLoggedIn$;
  }
  onLogout(): void {
    this.authService.logout();
  }
}
