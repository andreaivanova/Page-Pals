import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BookService } from '../book.service';
import { NgForm } from '@angular/forms';
import { Book } from '../../types/book';

@Component({
  selector: 'app-edit-book',
  templateUrl: './edit-book.component.html',
  styleUrl: './edit-book.component.css'
})
export class EditBookComponent implements OnInit {
  book!: Book;
  token: string = JSON.parse(localStorage.getItem('currentUser')!).accessToken;
  id: string =  this.activedRoute.snapshot.params['_id'];
  constructor(private bookService: BookService, private router: Router, private activedRoute: ActivatedRoute){}

  editBookHandler(form: NgForm){
    if(form.invalid){
      return;
    }
    const {title, author, photo, description} = form.value;

 this.bookService.editBook(this.token, this.id,title, author, photo, description).subscribe({
      next: ()=> {this.router.navigate([`/books/${this.id}`])},
      error: (error)=> {
        console.log(error)
        this.router.navigate([`/books/${this.id}`])
      }
    })
  }

  ngOnInit(): void {
    const id = this.activedRoute.snapshot.params['_id']
    this.bookService.getBook(id).subscribe((book)=>{
   
      this.book = book;

  
    });
  }
}
