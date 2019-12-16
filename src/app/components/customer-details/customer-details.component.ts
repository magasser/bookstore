import { Component, OnInit } from '@angular/core';
import {OrderService} from '../../services/order.service';
import {Customer} from '../../models/customer';
import {CreditCardType} from '../../enums/credit-card-type.enum';
import {CreditCard} from '../../models/credit-card';

@Component({
  selector: 'app-customer-details',
  templateUrl: './customer-details.component.html',
  styleUrls: ['./customer-details.component.css']
})
export class CustomerDetailsComponent implements OnInit {

  private customer: Customer;
  private creditCardTypes: CreditCardType[] = [
    CreditCardType.VISA,
    CreditCardType.MASTERCARD
  ];

  private saved: boolean;

  constructor(private orderService: OrderService) {
    this.customer = new Customer();
    this.customer.creditCard = new CreditCard();
  }

  ngOnInit() {
  }

  saveCustomer(): void {
    this.orderService.customer = this.customer;
    this.saved = true;
  }
}
