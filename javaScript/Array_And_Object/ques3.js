const student = {
  name: "Alice",
  age: 18,
  major: "Computer Science",
  GPA: 8.8,
  isEnrolled: true,
};

// a:
Object.preventExtensions(student);

//b:
const extensibleStatus = Object.isExtensible(student);

//c:
const teacher = {
  subject: "Math",
};

//d:
Object.seal(teacher);

//e:
const sealStatus = Object.isSealed(teacher);

//f:
console.log(extensibleStatus);
console.log(sealStatus);
