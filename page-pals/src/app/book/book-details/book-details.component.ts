import { Component, OnInit } from '@angular/core';
import { BookService } from '../book.service';
import { UserService } from '../../user/user.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Book } from '../../types/book';
import { Comment } from '../../types/comment';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.component.html',
  styleUrl: './book-details.component.css',
})
export class BookDetailsComponent implements OnInit {
  book!: Book;
  createdOn: string = '';
  comments!: Comment[];

  token: string = localStorage.getItem('currentUser')
    ? JSON.parse(localStorage.getItem('currentUser')!).accessToken
    : '';
  user = localStorage.getItem('currentUser')
    ? JSON.parse(localStorage.getItem('currentUser')!)
    : '';
  deleteHandler() {
    this.bookService.deleteBook(this.token, this.book!._id!).subscribe(() => {
      this.router.navigate(['/books']);
    });
  }

  commentHandler(form: NgForm) {
    const id = this.activedRoute.snapshot.params['_id'];

    if (form.invalid) {
      return;
    }

    const { comment } = form.value;

    this.bookService
      .commentOnBook(this.token, id, this.user.email, comment, this.user._id)
      .subscribe({
        next: (res) => {
          // console.log(res);
          this.comments.push(res)
          // console.log(form.value);
          form.resetForm();
          
          this.router.navigate([`/books/${id}`]);
        },
        error: (error) => {
          console.log(error);
          this.router.navigate(['/books']);
        },
      });
  }
  loadBook(): void {
    const id = this.activedRoute.snapshot.params['_id'];
    this.bookService.getBook(id).subscribe((book) => {
      this.createdOn = new Date(book._createdOn).toString().slice(0, 15);
    // console.log(book);

      this.book = book;
    });
  }
  constructor(
    private bookService: BookService,
    private activedRoute: ActivatedRoute,
    private userService: UserService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.loadBook();

    this.loadComments();
  }
  loadComments() {
    const bookId = this.activedRoute.snapshot.params['_id'];
    this.bookService.loadCommentsForACertainPost(bookId).subscribe({
      next: (res) => {
        res = res.filter((comment) => comment._bookId === bookId);
        
        this.comments = res;
      },
      error: (error) => {
        console.log(error);
      },
    });
  }
}
