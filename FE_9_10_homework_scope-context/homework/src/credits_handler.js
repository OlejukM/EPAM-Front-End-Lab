function userCard(key) {
  let balance = 100;
  let transactionLimit = 100;
  let historyLogs = [];
  const tax = 0.5;
  const percent = 100;

  return {
    getCardOptions: function() {
      return { key, balance, transactionLimit, historyLogs };
    },
    putCredits: function(value) {
      balance += value;
      historyLogs.push({
        operationType: 'Received credits',
        credits: value,
        operationTime: new Date().toLocaleString('en-GB')
      });
    },
    takeCredits: function(value) {
      if (value < transactionLimit && value < balance) {
        balance -= value;
        historyLogs.push({
          operationType: 'Widthdraw',
          credits: value,
          operationTime: new Date().toLocaleString('en-GB')
        });
      } else {
        console.log('Not enough money, please work harder to get more!');
      }
    },
    setTransactionLimit: function(value) {
      transactionLimit = value;
      historyLogs.push({
        operationType: 'Your transaction limit was changed',
        credits: value,
        operationTime: new Date().toLocaleString('en-GB')
      });
    },
    transferCredits: function(value, card) {
      let valueWithTaxes = value * tax / percent + value;
      if (valueWithTaxes > balance) {
        console.log('Failed: balance exceed');
      } else if (valueWithTaxes > transactionLimit) {
        console.log('Failed: transaction limit exceed');
      } else {
        this.takeCredits(valueWithTaxes);
        card.putCredits(value);
      }
    }
  };
}

class UserAccount {
  constructor(name) {
    this.name = name;
    this.cards = [];
    this.maxCards = 3;
  }

  addCard() {
    if (this.cards.length < this.maxCards) {
      this.cards.push(userCard(this.cards.length + 1));
    } else {
      console.log('Failed: You can use only 3 cards');
    }
  }

  getCardByKey(key) {
    return this.cards[key - 1];
  }
}