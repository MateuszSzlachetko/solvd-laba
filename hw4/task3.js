function createBankAccount(initialBalance = 1000) {
  let _balance = initialBalance;
  return {

    get formattedBalance() {
      return `$${_balance}`;
    },

    set balance(newBalance) {
      _balance = newBalance;
    },

    get balance() {
      return _balance;
    },

    transfer(targetAccount, amount) {
      if (amount > _balance) {
        throw new Error('Insufficient funds');
      }
      this.balance -= amount;
      targetAccount.balance += amount;
    }
  };
}

const account1 = createBankAccount(); // default 1000
const account2 = createBankAccount(500);

console.log('Account1 balance:', account1.formattedBalance); // "$1000"
console.log('Account2 balance:', account2.formattedBalance); // "$500"

account1.transfer(account2, 200);

console.log('Account 1 balance after transfer:', account1.formattedBalance); // "$800"
console.log('Account 2 balance after transfer:', account2.formattedBalance); // "$700"

try {
  account1.transfer(account2,5000)
} catch (e) {
  console.log(e.toString())
}