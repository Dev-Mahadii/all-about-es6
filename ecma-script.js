// Template String

const number1 = 5;
const number2 = 10;

const sum = `The sum of number1: ${number1} and number2: ${number2} is ${number1+number2}`

let poem = `amar poran jaha chay
tumi tai tumi tai tmi tai go
amar o poran jaha chay`


console.log(sum);
console.log(poem);


//traditional function declaration

console.log(add(5,7)); //can be called before declaration

function add(number1, number2){
    return number1+number2;
}


// another way of function declaration

const addition = function (number1, number2){
    console.log(number1+number2);
}

addition(9, 21);


// Arrow function

const square = (x) => x*x;
console.log(square(5));


const multiply = (num1, num2) => num1*num2;
const product = multiply(5,7);
console.log(`product is ${product}`);


// Spread operator

const array1 = [87, 5, 8, 12]
console.log(array1);
console.log(...array1);

const max = Math.max(57, 567, 5, 10);
console.log(max);

// const max1 = Math.max(array1); return NaN
const max1 = Math.max(...array1);
console.log(max1);

// const first = [1, 2, 3, 4, 5];
// const second = first;
// second.push(6);
// console.log(first); why 6 is pushed in first? reference copy  

const first = [1, 2, 3, 4, 5];
const second = [...first];
second.push(6);
console.log(`This is first ${first}`);
console.log(`This is second ${second}`);
second.push(9);
console.log(`Now second ${second}`);

const value = [98, 12, 96];
const prices = [56, 564, 5];

const all = [...value,  999, ...prices];
console.log(`This is from array all ${all}`);

const person = {name : 'Sagor', age : 32};
const employee = {profession : 'developer', ...person};

console.log(employee); 

const total = (a, b, c)=> a+b+c;
const result = total(5, 10, 15);
const digits = [20, 25, 30];
total(...digits);
  


