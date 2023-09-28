// Creates a class with attributes, getters, setters, and two methods

import Currency from './3-currency';

export default class Pricing {
  constructor(amount, currency) {
    this.amount = amount;
    this.currency = currency;
  }

  // amount getter
  get amount() {
    return this._amount;
  }

  // amount setter
  set amount(amount) {
    if (typeof amount !== 'number') {
      throw TypeError('Amount must be a number');
    }

    this._amount = amount;
  }

  // currency getter
  get currency() {
    return this._currency;
  }

  // currency setter
  set currency(currency) {
    if (typeof currency !== typeof new Currency()) {
      throw TypeError('Currency must be a Currency object');
    }

    this._currency = currency;
  }

  displayFullPrice() {
    return `${this._amount} ${this.currency.name} (${this.currency.code})`;
  }

  static convertPrice(amount, conversionRate) {
    if (typeof amount !== 'number') {
      throw TypeError('Amount must be a number');
    } else if (typeof conversionRate !== 'number') {
      throw TypeError('conversionRate must be a number');
    }

    return amount * conversionRate;
  }
}
