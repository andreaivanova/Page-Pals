
import { Component, OnInit } from '@angular/core';
import { BookService } from '../book/book.service';
import { Book } from '../types/book';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})

export class HomeComponent implements OnInit{

  bookList: Book[]= [];
  constructor(private bookService: BookService){
    
  }

  ngOnInit(): void {
    this.bookService.getThemes().subscribe(  {
      next: (books)=>{
        
        this.bookList = books.slice(0,3);
        console.log(this.bookList);
      } ,
      error: (err) =>{
        console.error(`error: ${err}`)
      }, 
    });

   
  }
}
