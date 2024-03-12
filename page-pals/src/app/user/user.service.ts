import { Injectable, OnDestroy } from '@angular/core';
import { User } from '../types/user';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Subscription, tap } from 'rxjs';
import { environment } from '../../environments/environment.development';


@Injectable({
  providedIn: 'root',
})
export class UserService implements OnDestroy {
  private user$$ = new BehaviorSubject<User | undefined>(undefined);

  public user$ = this.user$$.asObservable();
  user: User | undefined;
  USER_KEY = '[user]';

  get isLogged(): boolean {
    return !!this.user;
  }

  subscription: Subscription;

  constructor(private http: HttpClient) {
   
    this.subscription = this.user$.subscribe((user)=>{
      this.user=user;

    });
  }

  login(email: string, password: string) {
    const { appUrl } = environment;
   
   
    return this.http
      .post<User>(`${appUrl}/users/login`, {
        email,
        password,
      })
      .pipe(tap((user) => this.user$$.next(user)));
  }

  register(
    email: string,
    password: string,

  
  ) {
    const { appUrl } = environment;

    return this.http.post<User>(`${appUrl}/users/register`, {
      email,
      password,
      
    })
    .pipe(tap((user) => this.user$$.next(user)));;
  }

  logout() {
    return this.http
      .post<User>('/api/logout', {})
      .pipe(tap((user) => this.user$$.next(undefined)));
  }


  getProfile(){
   return this.http
    .get<User>('/api/users/profile')
    .pipe(tap((user) => this.user$$.next(user)));
  }
  
 
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
