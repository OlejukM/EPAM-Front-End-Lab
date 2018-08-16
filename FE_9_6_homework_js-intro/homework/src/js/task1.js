const price = +prompt('Please enter amount of money', '0');
const discount = +prompt('Please enter discount', '0');
const saved = price * discount / 100;
const priceWithDiscount = price - saved;

if (price < 0) {
  console.log('Invalid data');
} else {
  console.log(`Price without discount: ${parseFloat(price.toFixed(2))}
Discount: ${parseFloat(discount.toFixed(2))}%  
Price with discount: ${parseFloat(priceWithDiscount.toFixed(2))} 
Saved: ${parseFloat(saved.toFixed(2))}`);
}
