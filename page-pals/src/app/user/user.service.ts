import { Injectable, OnDestroy } from '@angular/core';
import { User } from '../types/user';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject, Observable, Subscription, tap } from 'rxjs';
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
  getUser(): Observable <User | undefined> {
    return this.user$;
  }

  login(email: string, password: string) {
    const { appUrl } = environment;
   
   
    return this.http
      .post<User>(`${appUrl}/users/login`, {
        email,
        password,
      })
      .pipe(tap((user) => 
      {
        // console.log(user);
        localStorage.setItem('currentUser', JSON.stringify(user));
      return   this.user$$.next(user)
      }
      ));
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
    .pipe(tap((user) => 
{
  localStorage.setItem('currentUser', JSON.stringify(user));

  return this.user$$.next(user)
}

    ));;
  }

  logout(token: string) {

    const { appUrl } = environment;
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'X-Authorization': token
    })
    return this.http
      .get<User>(`${appUrl}/users/logout`,{ headers: headers })
      .pipe(tap((user) => 
{
  localStorage.removeItem('currentUser');
 return this.user$$.next(undefined)
}
      ));
  }



  

  // setUser(user: any): void {
  //   localStorage.setItem('currentUser', JSON.stringify(user));
  // }
 
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
