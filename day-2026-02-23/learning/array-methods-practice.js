const students = [
  { name: 'Alice', age: 20, grade: 85 },
  { name: 'Bob', age: 22, grade: 92 },
  { name: 'Charlie', age: 19, grade: 78 },
  { name: 'Diana', age: 21, grade: 88 },
  { name: 'Eve', age: 20, grade: 95 }
];

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function Inhoa(value) {
  return value.name.toUpperCase()
}
const InHoaTen = students.map(Inhoa)

function locGrade(value) {
  return value.grade >= 85
}
const Grade = students.filter(locGrade)

const diemtong = students.reduce((sum, student) => {
  return sum + student.grade
}, 0)

function gradecao(value) {
  return value.grade >= 90
}

const checkdiem = students.some(gradecao)
function tuoi(value) {
   return value.age >= 18
}
const checktuoi = students.every(tuoi)

console.log("ten duoc in hoa la: ", InHoaTen)
console.log("nx hsinh co diem tren 85 la: ", Grade)
console.log("tong diem la: ", diemtong)
if (checkdiem === true) {
  console.log("co hsinh diem cao")
}
else 
  console.log("k co hsinh diem cao")

if (checktuoi) {
  console.log("co hsinh du tuoi")
}
else {
  console.log("co hsinh k du tuoi")
}

const chain = students.filter(students => students.grade >= 80)
.map(students => students.name)
.join(", ")

console.log(chain)

const tophs = students.reduce((max, student) => {
  if (student.grade > max.grade) {
    return student;
  }
  return max;
});

console.log(tophs);

const average = students.map(students => students.grade).reduce((sum, grade) => sum + grade, 0) / students.length;

console.log(average);

const lochs = students.filter(students => students.age === 20).map(students => students.name);
console.log(lochs);