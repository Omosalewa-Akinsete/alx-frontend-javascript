import Currency from './3-currency';

export default class Pricing {
  // Constructor
  constructor(amount, currency) {
    // Check if amount is a number
    if (typeof (amount !== 'number') {
      TypeError('Amount must be a number');
    }
    this._amount = amount;

    // Check if currency is an instance of Currency
    if (!(currency instanceof Currency)) {
      TypeError('Currency must be an instance of Currency');
    }
    this._currency = currency;
  }

  // Getter and Setter for amount
  get amount() {
    return this._amount;
  }

  set amount(amount) {
    // Check if amount is a number
    if (typeof (amount) !== 'number') {
      TypeError('Amount must be a number');
    }
    this._amount = amount;
  }

  // Getter and Setter for currency
  get currency() {
    return this._currency;
  }

  set currency(currency) {
    // Check if currency is an instance of Currency
    if (!(currency instanceof Currency)) {
      TypeError('Currency must be an instance of Currency');
    }
    this._currency = currency;
  }

  // Display full price method
  displayFullPrice() {
    return `${this._amount} ${this.currency.displayFullCurrency()}`;
  }

  // Convert price static method
  static convertPrice(amount, conversionRate) {
    // Check if amount is a number
    if (typeof (amount) !== 'number') {
      return TypeError('Amount must be a number');
    }

    // Check if conversionRate is a number
    if (typeof conversionRate !== 'number') {
      return TypeError('Conversion Rate must be a number');
    }

    return amount * conversionRate;
  }
}
