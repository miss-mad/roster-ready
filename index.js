// "require" is a way to target a file or package needed to create this readme generator app
// in the first two cases, "require" allows us to use certain packages within this js file
const inquirer = require("inquirer");
const fs = require("fs");


// in this case, information from another js file is imported so that we can use it in this one
const generateHTML = require("./src/generateHTML");

function questions() {
  inquirer
    // questions for the user
    .prompt([
      // ------------------------------------------------------------- MANAGER
      // manager:
      // name
      // employee ID
      // email (interactive)
      // office #
      {
        type: "input",
        message: "What is the team manager's name?",
        name: "managerName",
      },
      {
        type: "number",
        message: "What is the manager's employee ID?",
        name: "managerId",
        // validation doesn't work yet; can't escape NaN
        // validate: function (managerId) {
        //     if (managerId === number) {
        //       return managerId;
        //     } else {
        //       return console.log(" Please enter a number.");
        //     }
        //   },
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
      // ------------------------------------------------------------- END MANAGER
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
      // ------------------------------------------------------------- ENGINEER
      // engineer:
      // name
      // employee ID
      // email (interactive)
      // github username (opens in new tab)
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
      // ------------------------------------------------------------- END ENGINEER
      // take back to the menu options to add another employee
      {
        type: "list",
        message:
          "Which type of employee would you like to add to the roster next?",
        choices: ["Engineer", "Intern", "None"],
        name: "employeeTypeNext2",
      },
      // ------------------------------------------------------------- INTERN
      // intern:
      // name
      // employee ID
      // email (interactive)
      // school
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
      // ------------------------------------------------------------- END INTERN
      // take back to the menu options to add another employee
      {
        type: "list",
        message:
          "Which type of employee would you like to add to the roster next?",
        choices: ["Engineer", "Intern", "None"],
        name: "employeeTypeNext",
      },
      // finish creating team
      // exit app and create HTML
      {
        type: "confirm",
        message: "Are you finished listing your team?",
        name: "employeeTypeNone",
        when: (answer) => answer.employeeTypeNext === "None",
      },
      {
        type: "list",
        message:
          "Which type of employee would you like to add to the roster next?",
        choices: ["Engineer", "Intern", "None"],
        name: "employeeTypeNext",
        // when: (answer) => answer.employeeTypeNone === false,
      },
    ])

    // the .prompt returns answers and .then catches those answers
    .then((answers) => {
      console.log(answers);

      // then calls the writeToFile() function to write answers into a newly created README.md file

      writeToFile(answers);
    })

    // if there are any errors, the function should log the error to the console; otherwise, shout, "success!"
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


  // "fs" stands for "file-system" and is something built into node.js to allow us to read and write files. in this case, we're writing (creating) a new README.md file and then calling the generateMarkdown() function to populate the file with the format and information we want.
  fs.writeFile(
    "./dist/index.html",
    generateHTML(answers),
    (err) => {
      err ? console.log(err) : console.log("index.html successfully created!");
    }
  );
};

questions();
