function userCard(key) {
  let balance = 100;
  let transactionLimit = 100;
  let historyLogs = [];

  return {
    getCardOptions: function() {
      console.log({ balance, transactionLimit, historyLogs, key });
    },
    putCredits: function(value) {
      balance += value;
    },
    takeCredits: function(value) {
      if (value < transactionLimit && value < balance) {
        balance -= value;
      } else {
        console.log("Not enough money, please work harder to get more!");
      }
    },
    setTransactionLimit: function(value) {
      transactionLimit = value;
    },
    transferCredit: function(value, card) {}
  };
}
