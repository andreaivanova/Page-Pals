import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';


import { UserService } from '../user/user.service';
import { Observable, map } from 'rxjs';
import { User } from '../types/user';

@Injectable({
  providedIn: 'root',
})
export class GuestGuard implements CanActivate {
  constructor(private userService: UserService, private router: Router) {
  
    this.userService.getUser().subscribe((user) => {
      this.isGuest = !!!user;
    });
  }

  isGuest: boolean = true;

  canActivate(): boolean {
 
    if (this.isGuest) {
      return true;
    } else {
      this.router.navigate(['/']);
      return false;
    }
  }
  

}

