const Employee = require("./employee");

class Intern extends Employee {
  constructor() {
    super();
    this.school = school;
  }

  getSchool() {}

  getRole() {
    // overridden to return "Intern"
  }
}
