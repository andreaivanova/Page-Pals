import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { UserService } from '../user.service';
import { Router } from '@angular/router';
import { matchPasswordsValidator } from '../../validators/match-passwords-validator';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  errorMessage: string | undefined;
  constructor(private userService: UserService, private router: Router, private formBuilder: FormBuilder){

  }

  form = this.formBuilder.group({
    email: ['', [Validators.required, Validators.email]],
  
    passwords: this.formBuilder.group(
      {
        password: ['', [Validators.required, Validators.minLength(6)]],
        rePassword: ['', [Validators.required, Validators.minLength(6)]],
      },
      { validators: [matchPasswordsValidator('password', 'rePassword')] }
    ),
  });

  register(): void{
    if(this.form.invalid){
      return;  
    }


    const { email,passwords: {password, rePassword}  = {} } = this.form.value;
    if(password!== rePassword){
      this.errorMessage =  'Passwords don\'t match';

      return;
    }
     this.userService.register(email!,password!).subscribe(()=>{

       this.router.navigate(['/home'])
     }, 
     (error)=>{
      console.log(error);
      this.errorMessage =  error.error.message;
     });
  }

}
