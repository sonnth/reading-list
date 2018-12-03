import { Component, OnInit } from '@angular/core';
import {Book} from '../reading-list';
import {BookService} from '../book.service';

@Component({
  selector: 'app-reading-books',
  templateUrl: './reading-books.component.html',
  styleUrls: ['./reading-books.component.css']
})
export class ReadingBooksComponent implements OnInit {

  ibook: Book[];

  constructor(private bookService: BookService) {
  }

  ngOnInit() {
    this.bookService.getBooks().subscribe(data => {
      this.ibook = data;
    });
  }

}
