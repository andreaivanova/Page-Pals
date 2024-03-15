import { Component, OnInit } from '@angular/core';
import { BookService } from '../book.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-new-book',
  templateUrl: './new-book.component.html',
  styleUrl: './new-book.component.css'
})
export class NewBookComponent   {

  token: string = JSON.parse(localStorage.getItem('currentUser')!).accessToken;
  constructor(private bookService: BookService, private router: Router){}
  newBookSubmitHandler(form: NgForm){
    if(form.invalid){
      return;
    }
    const {title, author, photo, description} = form.value;
    this.bookService.createBook(this.token, title, author, photo, description).subscribe({
      next: ()=> {

        this.router.navigate(['/books'])
    },
      error: (error)=> {
        console.log(error)
        this.router.navigate(['/books'])
      }
    })
  }



}
