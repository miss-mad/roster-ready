// "require" is a way to target a file or package needed to create this readme generator app
// in the first two cases, "require" allows us to use certain packages within this js file
const inquirer = require("inquirer");
const fs = require("fs");

// in this case, information from another js file is imported so that we can use it in this one
const generateHTML = require("./src/generateHTML");

// ------------------------------------------------------------- MANAGER
function managerQuestions() {
  inquirer
    .prompt([
      {
        type: "input",
        message: "What is the team manager's name?",
        name: "managerName",
      },
      {
        type: "number",
        message: "What is the manager's employee ID?",
        name: "managerId",
      },
      {
        type: "input",
        message: "What is the manager's email?",
        name: "managerEmail",
      },
      {
        type: "number",
        message: "What is the manager's office number?",
        name: "managerOfficeNumber",
      },
    ])

    .then((answers) => {
      console.log(answers);
      employeeTypeQuestion();
    })

    .catch((error) => {
      if (error.isTtyError) {
        console.log(error);
      } else {
        console.log(
          "Success! (but no index.html file generated - something is probably missing from the generateHTML)",
          error
        );
      }
    });
}
// ------------------------------------------------------------- END MANAGER

function employeeTypeQuestion() {
  inquirer
    .prompt([
      // menu option to add an engineer or an intern or finish
      {
        type: "list",
        message:
          "Which type of employee would you like to add to the roster next?",
        choices: ["Engineer", "Intern", "None"],
        name: "employeeTypeNext",
        // validate: function (employeeTypeNext) {
        //   if (employeeTypeNext == "None") {
        //     return "Please choose an employee type to add the next employee.";
        //   }
        // },
      },
    ])
    .then((answers) => {
      console.log(answers);
      if (answers.employeeTypeNext === "Engineer") {
        engineerQuestions();
      } else if (answers.employeeTypeNext === "Intern") {
        internQuestions();
      } else {
        noneQuestion();
      }
    })

    .catch((error) => {
      if (error.isTtyError) {
        console.log(error);
      } else {
        console.log(
          "Success! (but no index.html file generated - something is probably missing from the generateHTML)",
          error
        );
      }
    });
}

// ------------------------------------------------------------- ENGINEER
function engineerQuestions() {
  inquirer
    .prompt([
      {
        type: "input",
        message: "What is the engineer's name?",
        name: "engineerName",
        // when: (answer) => answer.employeeTypeNext === "Engineer",
      },
      {
        type: "number",
        message: "What is the engineer's employee ID?",
        name: "engineerId",
        // when: (answer) => answer.employeeTypeNext === "Engineer",
      },
      {
        type: "input",
        message: "What is the engineer's email?",
        name: "engineerEmail",
        // when: (answer) => answer.employeeTypeNext === "Engineer",
      },
      {
        type: "input",
        message: "What is the engineer's Github username?",
        name: "engineerGithub",
        // when: (answer) => answer.employeeTypeNext === "Engineer",
        // (opens in new tab)
      },
    ])
    .then((answers) => {
      console.log(answers);
      employeeTypeQuestion();
    })

    .catch((error) => {
      if (error.isTtyError) {
        console.log(error);
      } else {
        console.log(
          "Success! (but no index.html file generated - something is probably missing from the generateHTML)",
          error
        );
      }
    });
}
// ------------------------------------------------------------- END ENGINEER

// ------------------------------------------------------------- INTERN
function internQuestions() {
  inquirer
    .prompt([
      {
        type: "input",
        message: "What is the intern's name?",
        name: "internName",
        // when: (answer) => answer.employeeTypeNext === "Intern",
      },
      {
        type: "number",
        message: "What is the intern's employee ID?",
        name: "internId",
        // when: (answer) => answer.employeeTypeNext === "Intern",
      },
      {
        type: "input",
        message: "What is the intern's email?",
        name: "internEmail",
        // when: (answer) => answer.employeeTypeNext === "Intern",
      },
      {
        type: "input",
        message: "Where does the intern go to school?",
        name: "internSchool",
        // when: (answer) => answer.employeeTypeNext === "Intern",
      },
    ])
    .then((answers) => {
      console.log(answers);
      employeeTypeQuestion();
    })

    .catch((error) => {
      if (error.isTtyError) {
        console.log(error);
      } else {
        console.log(
          "Success! (but no index.html file generated - something is probably missing from the generateHTML)",
          error
        );
      }
    });
}
// ------------------------------------------------------------- END INTERN

// finish creating team
// exit app and create HTML
function noneQuestion() {
  inquirer
    .prompt([
      {
        type: "confirm",
        message: "Are you finished listing your team?",
        name: "employeeTypeNone",
        // when: (answer) => answer.employeeTypeNext3 === "None",
      },
    ])
    .then((answers) => {
      console.log(answers);
      if (answers.employeeTypeNone === false) {
        employeeTypeQuestion();
      } else {
        writeToFile(answers);
        return;
      }
    })

    .catch((error) => {
      if (error.isTtyError) {
        console.log(error);
      } else {
        console.log(
          "Success! (but no index.html file generated - something is probably missing from the generateHTML)",
          error
        );
      }
    });
}

const writeToFile = (answers) => {
  console.log(answers);

  fs.writeFile("./dist/index.html", generateHTML(answers), (err) => {
    err
      ? console.log(err)
      : console.log("index.html successfully created in dist folder!");
  });
};

managerQuestions();
