const Employee = require("./employee");

class Engineer extends Employee {
  constructor() {
    super();
    this.github = github;
  }
  
  getGithub() {}

  getRole() {
    // overridden to return "Engineer"
  }
}
