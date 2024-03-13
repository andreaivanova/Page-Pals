import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.development';
import { Book } from '../types/book';

@Injectable({
  providedIn: 'root',
})
export class BookService {
  constructor(private http: HttpClient) {}

  getThemes() {
    const { appUrl } = environment;
    return this.http.get<Book[]>(`${appUrl}/data/books`);
  }
}