const student = {
    name : 'Rafid',
    1: 50,
    marks: 60
}

const studentName = student.name;
// const studentNumber = student.1; //error - can't access with dot
const stu = student['name'];
const stud = student[1];

console.log(stu);