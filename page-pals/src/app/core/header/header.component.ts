import { Component, OnInit } from '@angular/core';
import { UserService } from '../../user/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {
  constructor(private userService: UserService, private router: Router) {}
  isAuth(): any {
    const user = localStorage.getItem('currentUser');
    if (user) {
      return true;
    }
    return false;
  }

  logout(): void {
    const user = JSON.parse(localStorage.getItem('currentUser')!);
    const token = user.accessToken;
    this.userService.logout(token).subscribe({
      next: () => {
        this.router.navigate(['/']);
      },
      error: () => {
        this.router.navigate(['/']);
      },
    });
  }
}
