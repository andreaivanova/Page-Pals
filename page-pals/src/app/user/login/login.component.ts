import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UserService } from '../user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  errorMessage: string | undefined;
  constructor(private userService: UserService, private router: Router){

  }


  
  login(form: NgForm): void{
    if(form.invalid){
      return;  
    }


    const { email,password} = form.value;
    
     this.userService.login(email,password).subscribe(()=>{
      // const user = { email: email, accessToken: 'user' }
       this.router.navigate(['/home'])
     }, 
     (error)=>{
      console.log(error);
      this.errorMessage =  error.error.message;
     });
  }
}
