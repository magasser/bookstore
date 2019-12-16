import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Book} from '../../models/book.model';
import {OrderService} from '../../services/order.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.css']
})
export class BookDetailsComponent implements OnInit {

  @Input() book: Book;

  @Output() back = new EventEmitter();

  constructor(private orderService: OrderService, private router: Router) { }

  ngOnInit() {
  }

  public orderBook(): void {
    this.orderService.book = this.book;
    this.router.navigateByUrl('/customer-details');
  }

}
