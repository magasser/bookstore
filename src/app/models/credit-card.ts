import {CreditCardType} from '../enums/credit-card-type.enum';

export class CreditCard {
  type: CreditCardType;
  number: string;
  expirationMonth: number;
  expirationYear: number;
}
