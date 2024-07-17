// student Management System

const student = [
  { id: 1, firstName: "John", lastName: "Doe", age: 20, grade: "A" },
  { id: 2, firstName: "Jane", lastName: "Smith", age: 22, grade: "B" },
  { id: 3, firstName: "Bob", lastName: "Johnson", age: 19, grade: "A" },
];

//a. add a student
function addStudent(id, firstName, lastName, age, grade) {
  student.push({ id, firstName, lastName, age, grade });
  console.log(`Student Added Successfully : ${firstName} ${lastName}`);
}

//b . Update Student Info
function updateStudent(id, updateInfo) {
  const studentData = student.find((data) => {
    return data.id === id;
  });
  if (studentData) {
    Object.assign(studentData, updateInfo);
  } else {
    console.log("InValid ID ");
  }
}

// const updateInfo = {
//   firstName: "Johnn",
//   lastName: "Doe",
//   age: 20.5
// };
// updateStudent(1,updateInfo);
// console.log(student);

//c. Delete Student

function deleteStudent(id) {
  const index = student.findIndex((data) => {
    return data.id === id;
  });
  if (index != -1) {
    student.splice(index, 1);
  } else {
    console.log("InValid ID ");
  }
}
// deleteStudent(2);
// console.log(student);

//d. List All Student
function ListAlLStudent() {
  console.log(student);
}
// ListAlLStudent();

// Find Student BY Grade
function findByGrade(grd) {
  return student.filter((data) => {
    return data.grade === grd;
  });
}
// console.log(findByGrade("B"));
// console.log("______________");
// console.log(student);

//Average age
function calculateAvg() {
  let avg = 0;
  let sum = 0;
  student.forEach((element) => {
    sum += element.age;
  });
  avg = sum / student.length;
  return avg;
}

// console.log(calculateAvg());
