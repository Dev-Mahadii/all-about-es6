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





