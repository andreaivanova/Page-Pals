import { Component, OnInit } from '@angular/core';
import { BookService } from '../book.service';
import { UserService } from '../../user/user.service';
import { ActivatedRoute } from '@angular/router';
import { Book } from '../../types/book';

@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.component.html',
  styleUrl: './book-details.component.css'
})
export class BookDetailsComponent implements OnInit {

  book!: Book;
  createdOn: string ="";
  loadBook(): void{
    const id = this.activedRoute.snapshot.params['_id']
    this.bookService.getBook(id).subscribe((book)=>{
const date = new Date(book._createdOn);
      this.createdOn = new Date(book._createdOn).toString().slice(0,15);
    
      this.book = book;

    
    });
  }
  constructor(private bookService: BookService, private activedRoute: ActivatedRoute, private userService: UserService){
    
  }

  ngOnInit(): void {
    this.loadBook();
  }


}
