import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';


import { UserService } from '../user/user.service';

@Injectable({
  providedIn: 'root',
})
export class GuestGuard implements CanActivate {
  constructor(private userService: UserService, private router: Router) {
  
    // this.userService.getUser().subscribe((user) => {
    //   this.isGuest = !!!user;
    // });
  }

  isGuest: boolean = true;

  canActivate(): boolean {
    let user = JSON.parse(localStorage.getItem('currentUser')!);
   this.isGuest = !!!user;
    if (this.isGuest) {
      return true;
    } else {
      this.router.navigate(['/']);
      return false;
    }
  }
  
}