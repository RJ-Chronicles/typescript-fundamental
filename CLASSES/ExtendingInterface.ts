interface Account {
  credit(amount: number): string;
  debit(amount: number): string;
}

interface Savings extends Account {
  minBalanceRequired(): string;
}

class mySavingsAccount implements Savings {
  constructor(private balance: number, private minBalance: number) {}
  minBalanceRequired(): string {
    return `Minimum balance you should maintain: ${this.minBalance}`;
  }
  credit(amount: number): string {
    this.balance += amount;
    return `new balance ${this.balance}`;
  }
  debit(amount: number): string {
    if (this.balance - amount >= this.minBalance) {
      this.balance -= amount;
      return `new balance ${this.balance}`;
    }
    return "Not sufficient funds!";
  }
}

const mySavings = new mySavingsAccount(1000, 500);
console.log(mySavings.minBalanceRequired());
console.log(mySavings.credit(3000));
console.log(mySavings.debit(4000));
