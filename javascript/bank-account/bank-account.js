//
// This is only a SKELETON file for the 'Bank Account' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class BankAccount {

  constructor() {
    this._balance = 0;
    this.isOpen = false;
  }

  open() {
    if (!this.isOpen) {
      this._balance = 0;
      this.isOpen = true;
    } else {
      throw new ValueError('Cannot open an already open account');
    }
  }

  close() {
    if (this.isOpen) {
      this.isOpen = false;
    } else {
      throw new ValueError('Cannot close an account that is not open');
    }
  }

  deposit(amount) {
    if (this.isOpen && amount >= 0) {
      this._balance += amount;
    } else {
      throw new ValueError('Cannot deposit into this account');
    }
  }

  withdraw(amount) {
    if (this.isOpen && (amount <= this._balance && amount > 0)) {
      this._balance -= amount;
    } else {
      throw new ValueError('Cannot withdraw this amount')
    }
  }

  get balance() {
    if (this.isOpen) {
      return this._balance;
    } else {
      throw new ValueError('Cannot check _balance on a closed account');
    }
  }

}

export class ValueError extends Error {

  constructor() {
    super('Bank account error');
  }

}
