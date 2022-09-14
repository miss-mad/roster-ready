// "require" is a way to target a file or package needed to create this HTML workplace roster app
// in the first two cases, "require" allows us to use certain packages within this js file
const inquirer = require("inquirer");
const fs = require("fs");

// in this case, information from another js file is imported so that we can use it in this one
const generateHTML = require("./src/generateHTML");

// creates a object of empty array values so that we can later use the push array method to add the answers object to the end of the array
let allAnswers = {
  manager: [],
  employee: [],
  engineer: [],
  intern: [],
};

// several functions that contain the questions for the user using inquirer. each function is for a specific employee type (manager, engineer, or intern), or is specifically for determining if the user is finished building the team
// each function calls the appropriate next function needed and also has an error catching system

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
      allAnswers.manager.push({ ...answers });

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

// menu option to add an engineer or an intern or finish
function employeeTypeQuestion() {
  inquirer
    .prompt([
      {
        type: "list",
        message:
          "Which type of employee would you like to add to the roster next?",
        choices: ["Engineer", "Intern", "None"],
        name: "employeeTypeNext",
      },
    ])
    .then((answers) => {
      allAnswers.employee.push({ ...answers });

      // determines which set of questions to fire next depending on the user's choice
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
      },
      {
        type: "number",
        message: "What is the engineer's employee ID?",
        name: "engineerId",
      },
      {
        type: "input",
        message: "What is the engineer's email?",
        name: "engineerEmail",
      },
      {
        type: "input",
        message: "What is the engineer's Github username?",
        name: "engineerGithub",
      },
    ])
    .then((answers) => {
      allAnswers.engineer.push({ ...answers });

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
      },
      {
        type: "number",
        message: "What is the intern's employee ID?",
        name: "internId",
      },
      {
        type: "input",
        message: "What is the intern's email?",
        name: "internEmail",
      },
      {
        type: "input",
        message: "Where does the intern go to school?",
        name: "internSchool",
      },
    ])
    .then((answers) => {
      allAnswers.intern.push({ ...answers });

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

// finish creating team and exit app
function noneQuestion() {
  inquirer
    .prompt([
      {
        type: "confirm",
        message: "Are you finished listing your team?",
        name: "employeeTypeNone",
      },
    ])
    .then((answers) => {
      if (answers.employeeTypeNone === false) {
        employeeTypeQuestion();
      } else {
        writeToFile(allAnswers);
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
// create index.html file with file system (fs)
const writeToFile = (answers) => {
  fs.writeFile("./dist/index.html", generateHTML(answers), (err) => {
    err
      ? console.log(err)
      : console.log("index.html successfully created in dist folder!");
  });
};

// fires the first set of questions to start app
managerQuestions();