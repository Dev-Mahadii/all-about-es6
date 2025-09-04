const numbers = [4, 5, 3, 2, 8];

const doubled = [];

for(const number of numbers){
    const result = number * 2;
    doubled.push(result);
}

console.log(doubled);

// const doubledUsingMap = (x) => {
//     const d = x*2;
//     return d;
// }


// const doubledUsingMap = x => x*2;

// Another way using map
const doubledUsingMap = numbers.map( x => x*2);
const fiveTimes = numbers.map(num => num*5);

console.log(doubledUsingMap);
console.log(fiveTimes);

const friends = ['Rahat', 'Ratul', 'Rajib', 'Rakib', 'Raju'];
const surname = friends.map(sur => `${sur} Hasan`);

console.log(surname);