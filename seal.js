const employee = {
    name: 'raja rani',
    designation: 'QA',
    salary: 20000,
    experience: 1,
    age: 22
}

Object.seal(employee);

// delete  employee.experience;

employee.salary = employee.salary + 5000;
employee.location = 'Dhaka';

console.log(employee);
