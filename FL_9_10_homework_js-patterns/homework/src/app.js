class Store {
  constructor(price) {
    this.pizzaSlicePrice = price;
    this.weekendDiscount = 0;
    this.nightDiscount = 0;
    this.bonus = 0;
  }

  fullPrice() {
    return this.pizzaSlicePrice - this.weekendDiscount - this.nightDiscount;
  }

  buyPizzaSlice() {
    return `Price after discount is ${this.fullPrice()} and you have ${
      this.bonus
    } bonuses’ e.g.`;
  }
}

const getDiscount = store => {
  const date = new Date();
  const getHrs = date.getHours();
  const getDay = date.getDay();
  if (getHrs === 23 || getHrs < 6) {
    store.nightDiscount = 10;
  }
  if (getDay === 0 || getDay === 6) {
    store.weekendDiscount = 5;
  }
  store.fullPrice();
};

const setBonus = store => {
  store.bonus = Math.floor(store.fullPrice() / 10);
};

let store = new Store(20);
getDiscount(store);
setBonus(store);
console.log(store.buyPizzaSlice());
