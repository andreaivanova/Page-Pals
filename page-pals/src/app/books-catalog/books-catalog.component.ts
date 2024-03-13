import { Component, OnInit } from '@angular/core';
import { BookService } from '../book/book.service';
import { Book } from '../types/book';

@Component({
  selector: 'app-books-catalog',
  templateUrl: './books-catalog.component.html',
  styleUrl: './books-catalog.component.css'
})
export class BooksCatalogComponent implements OnInit{

  bookList: Book[]= [];
  constructor(private bookService: BookService){
    
  }

  ngOnInit(): void {
    this.bookService.getThemes().subscribe(  {
      next: (books)=>{
        
        this.bookList = books;
        console.log(this.bookList);
      } ,
      error: (err) =>{
        console.error(`error: ${err}`)
      }, 
    });
  }
}
