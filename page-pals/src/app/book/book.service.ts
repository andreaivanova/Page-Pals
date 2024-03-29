import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.development';
import { Book } from '../types/book';
import { Comment } from '../types/comment';

@Injectable({
  providedIn: 'root',
})
export class BookService {
  constructor(private http: HttpClient) {}

  getBooks() {
    const { appUrl } = environment;
    return this.http.get<Book[]>(
      `${appUrl}/data/books/?sortBy=_createdOn%20desc`
    );
  }
  getBook(id: string) {
    const { appUrl } = environment;
    return this.http.get<Book>(`${appUrl}/data/books/${id}`);
  }


  createBook(
    token: string,
    title: string,
    author: string,
    photo: string,
    description: string
  ) {
    const { appUrl } = environment;
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'X-Authorization': token,
    });

    return this.http.post<Book>(
      `${appUrl}/data/books`,
      {
        title,
        author,
        photo,
        description,
      },
      { headers: headers }
    );
  }

  editBook(
    token: string,
    id: string,
    title: string,
    author: string,
    photo: string,
    description: string
  ) {
    const { appUrl } = environment;
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'X-Authorization': token,
    });

    return this.http.put<Book>(
      `${appUrl}/data/books/${id}`,
      {
        title,
        author,
        photo,
        description,
      },
      { headers: headers }
    );
  }

  deleteBook(token: string, id: string) {
    const { appUrl } = environment;
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'X-Authorization': token,
    });

    return this.http.delete(`${appUrl}/data/books/${id}`, { headers: headers });
  }

  commentOnBook(
    token: string,
    id: string,
    email: string,
    comment: string,
    userId: string
  ) {
    const { appUrl } = environment;
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'X-Authorization': token,
    });

    const data = {
      _bookId: id,
      ownerEmail: email,
      _ownerId: userId,
      comment: comment,
    };
    return this.http.post<Comment>(
      `${appUrl}/data/comments`,
      data,

      { headers: headers }
    );
  }


  loadCommentsForACertainPost(bookId: string){
    const { appUrl } = environment;
    return this.http.get<Comment[]>(
      `${appUrl}/data/comments/`
    );
    // ?select=${bookId}
  }
}
