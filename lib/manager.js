const Employee = require("./employee");

class Manager extends Employee {
  constructor() {
    super();
    this.officeNumber = officeNumber;
  }

  getRole() {
    // overridden to return "Manager"
  }
}
