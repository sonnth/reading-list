import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Book} from './reading-list';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  constructor(private http: HttpClient) {
  }

  private API_URL = 'http://localhost:8081/books';

  getBooks() {
    return this.http.get<Book[]>(this.API_URL);
  }

}
