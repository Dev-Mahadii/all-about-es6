const employee = {
    name: 'raja rani',
    designation: 'QA',
    salary: 20000,
    experience: 1
}

const keys = Object.keys(employee);
const values = Object.values(employee);
const entries = Object.entries(employee)

console.log(`Keys are: ${keys}`);
console.log(`Values are: ${values}`);
console.log(entries);