import { Injectable } from '@angular/core';
import {Book} from '../models/book.model';
import {BOOK_DATA} from '../resources/book-data';

@Injectable({
  providedIn: 'root'
})
export class CatalogService {

  constructor() { }

  searchBooks(keywords: string) {
    return new Promise<Book[]>(((resolve, reject) => {
      const searchResults = [];
      BOOK_DATA.forEach((book) => {
        if (book.toString().toLowerCase().search(keywords.toLowerCase()) !== -1) {
          searchResults.push(book);
        }
      });

      if (searchResults.length > 0) {
        resolve(searchResults);
      } else {
        reject('No Books found for keywords');
      }
    }));
  }
}
