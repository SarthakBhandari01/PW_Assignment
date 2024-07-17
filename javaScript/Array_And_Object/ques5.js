const student = {
  name: "Alice",
  age: 18,
  major: "Computer Science",
  GPA: 8.8,
  isEnrolled: true,
};

// Log Property Names and Values.
for (const data in student) {
  //obj.hasOwnProperty(prop)  //check if the property is directly on the object not the prototype.
  if (student.hasOwnProperty(data)) {
    console.log(`${data} : ${student[data]}`);
  }
}
//putting all the value of property into array
const arr = new Array();
for (const data in student) {
  if (student.hasOwnProperty(data)) {
    arr.push(student[data]);
  }
}
console.log(arr);
