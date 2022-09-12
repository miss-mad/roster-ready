class Employee {
  constructor() {
    this.name = name;
    this.id = id;
    this.email = email;
  }

  getName() {
    console.log(`This employee's name is ${this.name}`);
  }

  getId() {
    console.log(`This employee's ID number is ${this.id}`);
  }

  getEmail() {
    console.log(`The employee's email is ${this.email}`);
  }

  getRole() {
    // returns "Employee"
  }
}

module.exports = Employee;
