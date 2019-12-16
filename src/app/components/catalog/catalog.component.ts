import { Component, OnInit } from '@angular/core';
import {Book} from '../../models/book.model';
import {BOOK_DATA} from '../../resources/book-data';
import {log} from 'util';
import {CatalogService} from '../../services/catalog.service';

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.css']
})
export class CatalogComponent implements OnInit {

  private keywords: string;
  private books: Book[];
  private selectedBook: Book;
  private searchResults: Book[] = [];
  private errorMessage: string;

  constructor(private catalogService: CatalogService) {
    this.books = BOOK_DATA;
    this.keywords = '';
  }

  ngOnInit() {
  }

  selectBook(book: Book): void {
    this.selectedBook = book;
  }

  searchBooks(): void {
    if (this.keywords === '') {
      this.errorMessage = 'Enter keywords.';
      return;
    }
    this.catalogService.searchBooks(this.keywords)
      .then(result => {
        this.searchResults = result;
        this.errorMessage = null;
        console.log(this.searchResults);
      })
      .catch(error => this.errorMessage = error);
  }
}
