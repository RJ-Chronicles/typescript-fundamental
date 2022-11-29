var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Account = /** @class */ (function () {
    function Account(accNo, name, balance) {
        this.accNo = accNo;
        this.name = name;
        this.balance = balance;
        this.accNo = accNo;
        this.name = name;
        this.balance = balance;
    }
    Account.prototype.creditMoney = function (amount) {
        if (amount <= 0)
            throw new Error("Invalid amount provided");
        return (this.balance += amount);
    };
    Account.prototype.debitMoney = function (amount) {
        if (this.balance - amount > 0) {
            return (this.balance -= amount);
        }
        throw new Error("Not sufficient fund");
    };
    Account.prototype.getAmount = function () {
        return this.balance;
    };
    return Account;
}());
var SavingsAccount = /** @class */ (function (_super) {
    __extends(SavingsAccount, _super);
    function SavingsAccount(no, name, balance) {
        return _super.call(this, no, name, balance) || this;
    }
    SavingsAccount.prototype.savingAccSave = function (amount) {
        return _super.prototype.creditMoney.call(this, amount);
    };
    SavingsAccount.prototype.savingsAccDebit = function (amount) {
        if (_super.prototype.getAmount.call(this) - amount <= 500) {
            throw new Error("Not sufficient fund");
        }
        return _super.prototype.debitMoney.call(this, amount);
    };
    return SavingsAccount;
}(Account));
var mySavings = new SavingsAccount(101011, "Mars", 700000);
console.log("-----------My Balance------------");
console.log(mySavings.getAmount());
console.log(mySavings.savingAccSave(5000));
console.log(mySavings.savingsAccDebit(2000));
