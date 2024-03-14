import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.development';
import { Book } from '../types/book';

@Injectable({
  providedIn: 'root',
})
export class BookService {
  constructor(private http: HttpClient) {}

  getBooks() {
    const { appUrl } = environment;
    return this.http.get<Book[]>(`${appUrl}/data/books/?sortBy=_createdOn%20desc`);
  }
  getBook(id: string) {
    const { appUrl } = environment;
    return this.http.get<Book>(`${appUrl}/data/books/${id}`);
  }


  createBook(token: string, title: string, author: string, photo: string, description: string){
    const { appUrl } = environment;
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'X-Authorization': token

    });


    return this.http.post<Book>(`${appUrl}/data/books`, {
      title,
      author,
      photo,
      description,

      
    }, {headers: headers});
  }


 
}
