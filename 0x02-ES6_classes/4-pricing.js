import Currency from './3-currency';

// Pricing

export default class Pricing {
  // Constructor
  constructor(amount, currency) {
    if (typeof (amount) !== 'number') {
      TypeError('Amount must be a number');
    }
    this._amount = amount;

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
    if (!(currency instanceof Currency)) {
      TypeError('currency must be an instance of Currency');
    }
    this._currency = currency;
  }

  // Display full price method
  displayFullPrice() {
    // const cur = new Currency(this._currency._code, this._currency._name);
    return `${this._amount} ${this.currency.displayFullCurrency()}`;
  }

  // Display convert price Static mrthod
  static convertPrice(amount, conversionRate) {
    if (typeof (amount) !== 'number') {
      return TypeError('Amount must be a number');
    }

    if (typeof (conversionRate) !== 'number') {
      return TypeError('Conversion Rate must be a number');
    }

    return amount * conversionRate;
  }
}
