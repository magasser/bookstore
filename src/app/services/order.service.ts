import { Injectable } from '@angular/core';
import {Book} from '../models/book.model';
import {Customer} from '../models/customer';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  book: Book;
  customer: Customer;

  constructor() { }
}
