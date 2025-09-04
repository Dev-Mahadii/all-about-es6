/**
 * array destructuring
 * Use for of for array
 */


const numbers = [1, 2, 3, 4, 5];

for(let number of numbers){
    console.log(number);
}


/**
 * Object Destructuring
 * Use for in for object
 */


const employee = {
    name: 'raja rani',
    designation: 'QA',
    salary: 20000,
    experience: 1,
    age: 22
}

//option 1:

for(let key in employee){
    //console.log(key);
    const value = employee[key];
    console.log(`Key: ${key} , Value: ${value}`);
}

//option 2

const keys = Object.keys(employee);
// console.log(keys);

for(const key of keys){

    const value = employee[key];
    console.log(value);
}

let a = 12, b = 3;
[a, b] = [b, a];

console.log(`${a} and ${b}`);




