function displayStudentInfo(student) {
  for (const data in student) {
    console.log(`Property : ${data}, Value : ${student[data]}`);
  }
}
const student = {
  name: "Alice",
  age: 18,
  major: "Computer Science",
  GPA: 8.8,
  isEnrolled: true,
};
displayStudentInfo(student);
