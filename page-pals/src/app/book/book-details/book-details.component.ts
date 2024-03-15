import { Component, OnInit } from '@angular/core';
import { BookService } from '../book.service';
import { UserService } from '../../user/user.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Book } from '../../types/book';

@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.component.html',
  styleUrl: './book-details.component.css'
})
export class BookDetailsComponent implements OnInit {

  book!: Book;
  createdOn: string = "";
  token: string = localStorage.getItem('currentUser') ?  JSON.parse(localStorage.getItem('currentUser')!).accessToken : '';
  user =  localStorage.getItem('currentUser') ? JSON.parse(localStorage.getItem('currentUser')!) : '';
  deleteHandler(){
    this.bookService.deleteBook(this.token,this.book!._id!).subscribe(()=>{
      this.router.navigate(['/books'])
    });

  }
  loadBook(): void{
    const id = this.activedRoute.snapshot.params['_id']
    this.bookService.getBook(id).subscribe((book)=>{
      // console.log(book);
      
      this.createdOn = new Date(book._createdOn).toString().slice(0,15);
    
      this.book = book;

    
    });
  }
  constructor(private bookService: BookService, private activedRoute: ActivatedRoute, private userService: UserService,private router: Router){
    
  }

  ngOnInit(): void {
    this.loadBook();
  }


}
