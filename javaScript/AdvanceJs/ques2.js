class person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  sayHello() {
    console.log(
      `Hello, my name is ${this.name} and I am ${this.age} years old.`
    );
  }
}

class Employee extends person {
  constructor(name, age, designation) {
    super(name, age);
    this.designation = designation;
  }
  getDetails() {
    console.log(
      `Name: ${this.name}, Age: ${this.age}, Designation: ${this.designation}`
    );
  }
}

const emp1 = new Employee("sarthak", 22, "Software Engeneer");
emp1.getDetails();
emp1.sayHello();
