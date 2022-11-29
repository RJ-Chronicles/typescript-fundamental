class Account {
  constructor(
    private accNo: number,
    private name: string,
    private balance: number
  ) {
    this.accNo = accNo;
    this.name = name;
    this.balance = balance;
  }
  protected creditMoney(amount: number): number {
    if (amount <= 0) throw new Error("Invalid amount provided");
    return (this.balance += amount);
  }
  protected debitMoney(amount: number): number {
    if (this.balance - amount > 0) {
      return (this.balance -= amount);
    }
    throw new Error("Not sufficient fund");
  }
  getAmount(): number {
    return this.balance;
  }
}

class SavingsAccount extends Account {
  constructor(no: number, name: string, balance: number) {
    super(no, name, balance);
  }

  savingAccSave(amount: number): number {
    return super.creditMoney(amount);
  }
  savingsAccDebit(amount: number): number {
    if (super.getAmount() - amount <= 500) {
      throw new Error("Not sufficient fund");
    }
    return super.debitMoney(amount);
  }
}

const mySavings = new SavingsAccount(101011, "Mars", 700000);
console.log("-----------My Balance------------");
console.log(mySavings.getAmount());
console.log(mySavings.savingAccSave(5000));
console.log(mySavings.savingsAccDebit(2000));
