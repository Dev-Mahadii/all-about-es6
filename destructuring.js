// Array destructuring

// const products = {name: 'shirt', price: 500, quantity: 7};

// const discount = products.price*20/100;
// const yourPay = products.price - discount;
// const vatAmount = products.price*7/100;
// const totalAmount = yourPay + vatAmount;

// const priceAmount = products.price; 

// const discount = priceAmount*20/100;
// const yourPay = priceAmount - discount;
// const vatAmount = priceAmount*7/100;
// const totalAmount = yourPay + vatAmount;

const {namee, pricing, quantity, tax=7} = {namee: 'shirt', pricing: 500, quantity: 7};

console.log(`Namee: ${namee}, Pricing: ${pricing}, Quantity: ${quantity}, Tax: ${tax}`);

const discount = pricing*20/100;
const yourPay = pricing - discount;
const vatAmount = pricing*7/100;
const totalAmount = yourPay + vatAmount;



const device = {dname: 'phone', brand: 'samsung', dprice: 17000};
const {brand} = device;

console.log(brand); //output = samsung