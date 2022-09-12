const Employee = require("./employee");

class Engineer extends Employee {
  constructor(name, id, email, github) {
    super(name, id, email);
    this.github = github;
  }

  getGithub() {
    console.log(`This engineer's Github username is ${this.github}`);
  }

  getRole() {
    return "Engineer";
  }
}

const engineer = new Engineer()

module.exports = Engineer;
