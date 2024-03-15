import { Component, OnInit } from '@angular/core';
import { BookService } from '../book.service';
import { UserService } from '../../user/user.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Book } from '../../types/book';
import { NgForm } from '@angular/forms';

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

  commentHandler(form: NgForm){
    const id = this.activedRoute.snapshot.params['_id']
    
    if(form.invalid){
      return;
    }
console.log(form.value)
    const{comment}=form.value;
   
    this.bookService.commentOnBook(this.token,id, this.user.email, comment).subscribe({
      next: (res)=> {
        console.log(res)
        this.router.navigate(['/books'])
      },
      error: (error)=> {
        console.log(error)
        this.router.navigate(['/books'])
      }
    })

  }
  loadBook(): void{
    const id = this.activedRoute.snapshot.params['_id']
    this.bookService.getBook(id).subscribe((book)=>{
   
      
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
