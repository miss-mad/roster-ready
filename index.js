// "require" is a way to target a file or package needed to create this readme generator app
// in the first two cases, "require" allows us to use certain packages within this js file
const inquirer = require("inquirer");
const fs = require("fs");

// in this case, information from another js file is imported so that we can use it in this one
const generateHTML = require("./src/generateHTML");

function questions() {
  inquirer
    // the following are the list of questions for the user
    .prompt([
      // questions:
      {
        type: "list",
        message:
          "Which type of employee would you like to add to the roster first?",
        choices: ["Manager", "Engineer", "Intern"],
        name: "employeeTypeFirst",
        // validate: function (employeeTypeFirst) {
        //   if (employeeTypeFirst == null) {
        //     return console.log(
        //       "Please choose an employee type to add the first employee."
        //     );
        //   }
        // },
      },
      // manager:
      // name
      // employee ID
      // email (interactive)
      // office #
      //   {
      //     when: (answer) => answer.employeeType === "Manager",
      //     function () {
      //         inquirer
      //         .prompt([])
      //     }
      //   },
      {
        type: "input",
        message: "What is the manager's name?",
        name: "managerName",
        when: (answer) => answer.employeeTypeFirst === "Manager",
      },
      {
        type: "number",
        message: "What is the manager's employee ID? Please enter digits only",
        name: "managerId",
        when: (answer) => answer.employeeTypeFirst === "Manager",
      },
      {
        type: "input",
        message: "What is the manager's email?",
        name: "managerEmail",
        when: (answer) => answer.employeeTypeFirst === "Manager",
      },
      {
        type: "number",
        message:
          "What is the manager's office number? Please enter digits only",
        name: "managerOfficeNumber",
        when: (answer) => answer.employeeTypeFirst === "Manager",
      },
      // menu option to add an engineer or an intern or finish
      {
        type: "list",
        message:
          "Which type of employee would you like to add to the roster next?",
        choices: ["Manager", "Engineer", "Intern", "None"],
        name: "employeeTypeNext",
        // validate: function (employeeTypeNext) {
        //   if (employeeTypeNext == "None") {
        //     return "Please choose an employee type to add the next employee.";
        //   }
        // },
      },
      {
        type: "confirm",
        message:
          "Are you finished listing your team?",
        name: "employeeTypeNone",
        when: (answer) => answer.employeeTypeNext === "None",
      },
      {
        employeeTypeNext,
        name: "employeeTypeNext",
        when: (answer) => answer.employeeTypeNone === false,
      },
      // engineer:
      // name
      // employee ID
      // email (interactive)
      // github username (opens in new tab)
      // take back to the menu options to add another employee
      {
        type: "input",
        message: "?",
        name: "",
      },
      // intern:
      // name
      // employee ID
      // email (interactive)
      // school
      // take back to the menu options to add another employee
      {
        type: "input",
        message: "?",
        name: "",
      },
      {
        type: "input",
        message: "?",
        name: "",
      },
      // finish creating team
      // exit app and create HTML
    ]);
}
