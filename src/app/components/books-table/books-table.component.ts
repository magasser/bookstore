import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Book} from '../../models/book.model';

@Component({
  selector: 'app-books-table',
  templateUrl: './books-table.component.html',
  styleUrls: ['./books-table.component.css']
})
export class BooksTableComponent implements OnInit {

  @Input() books: Book[];

  @Output() selectBook = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

}
