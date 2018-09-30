const _logs = [];
let _bucket;
function getDate() {
  return new Date().toLocaleString();
}

function Product(name, description, price) {
  this.name = name;
  this.description = description;
  this.price = price;

  this.getPrice = function() {
    return this.price;
  };

  this.setPrice = function(changePrice) {
    if (changePrice > this.price) {
      _logs.push(`change price from ${this.price} to ${changePrice}`);
      this.price = +changePrice;
    } else {
      _logs.push(`cannot set smaller price than product has now`);
    }
  };

  this.add = function(stuff) {
    if (stuff instanceof ShoppingCart) {
      _bucket = stuff.name;
      _logs.push(`${this.name} is added to ${_bucket} on ${getDate()}`);
    } else {
      console.log(`Error`);
    }
    return this;
  };

  this.removeProduct = function(stuff) {
    if (stuff instanceof ShoppingCart) {
      _logs.push(`${this.name} is removed from ${_bucket} on ${getDate()} `);
      _bucket = null;
    } else {
      console.log(`Error`);
    }
  };

  this.getHistory = function() {
    return _logs;
  };
}

const _list = [];
const reducer = (accumulator, currentValue) => accumulator + currentValue.price;

function ShoppingCart(name, owner, maxCount) {
  this.name = name;
  this.owner = owner;
  this.maxCount = maxCount;

  this.addNewProduct = function(stuff) {
    if (stuff instanceof Product) {
      _logs.push(`${stuff.name} was added to ${this.name} on ${getDate()}`);
      _list.push(stuff);
      stuff.add(this);
    } else {
      console.log(`Plese try to add Product instance`);
    }

    return this;
  };

  this.removeProduct = function(stuff) {
    if (stuff instanceof Product) {
      for (let i = 0; i < _list.length; i++) {
        if (_list[i].name === stuff.name) {
 _logs.push(
            `${stuff.name} is removed from ${this.name} on ${getDate()}`
          ); 
}
        _list.splice(i, 1);
        return this;
      }
    } else {
      console.log(`Error`);
    }
  };

  this.getAvaragePrice = function() {
    return +(this.getTotalPrice() / _list.length).toFixed(2);
  };

  this.getProducts = function() {
    return _list;
  };

  this.getFormattedListOfProducts = function() {
    return `${name} is on ${this.name} from ${getDate()}. Detailed product desctiption: ${Product.description}`;
  };

  this.getTotalPrice = function() {
    return _list.reduce(reducer, 0);
  };

  this.getHistory = function() {
    return _logs;
  };
}

const banana = new Product(
  'banana',
  {
    color: 'yellow',
    size: 'medium'
  },
  45
);

const apple = new Product(
  'apple',
  {
    color: 'red',
    size: 'small'
  },
  30
);

const stevesShopCart = new ShoppingCart('stevesCart', 'Steve', 5);

stevesShopCart
  .addNewProduct(banana)
  .addNewProduct(banana)
  .addNewProduct(apple)
  .removeProduct(banana);

console.log(stevesShopCart.getHistory());
console.log('avarage price:', stevesShopCart.getAvaragePrice());
console.log('total price:', stevesShopCart.getTotalPrice());
stevesShopCart.addNewProduct('apple string');
console.log(banana.getPrice());
banana.setPrice(100);
console.log(banana.getPrice());
