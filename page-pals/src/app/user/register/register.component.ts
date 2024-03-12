import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UserService } from '../user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  errorMessage: string | undefined;
  constructor(private userService: UserService, private router: Router){

  }


  
  register(form: NgForm): void{
    if(form.invalid){
      return;  
    }


    const { email,password, rePassword} = form.value;
    if(password!== rePassword){
      this.errorMessage =  'Passwords don\'t match';

      return;
    }
     this.userService.register(email,password).subscribe(()=>{

       this.router.navigate(['/home'])
     }, 
     (error)=>{
      console.log(error);
      this.errorMessage =  error.error.message;
     });
  }

}
