var mySavingsAccount = /** @class */ (function () {
    function mySavingsAccount(balance, minBalance) {
        this.balance = balance;
        this.minBalance = minBalance;
    }
    mySavingsAccount.prototype.minBalanceRequired = function () {
        return "Minimum balance you should maintain: ".concat(this.minBalance);
    };
    mySavingsAccount.prototype.credit = function (amount) {
        this.balance += amount;
        return "new balance ".concat(this.balance);
    };
    mySavingsAccount.prototype.debit = function (amount) {
        if (this.balance - amount >= this.minBalance) {
            this.balance -= amount;
            return "new balance ".concat(this.balance);
        }
        return "Not sufficient funds!";
    };
    return mySavingsAccount;
}());
var mySavings = new mySavingsAccount(1000, 500);
console.log(mySavings.minBalanceRequired());
console.log(mySavings.credit(3000));
console.log(mySavings.debit(4000));
