// "require" is a way to target a file or package needed to create this readme generator app
// in the first two cases, "require" allows us to use certain packages within this js file
const inquirer = require("inquirer");
const fs = require("fs");

// in this case, information from another js file is imported so that we can use it in this one
const generateHTML = require("./src/generateHTML");

function questions() {
  inquirer
    // the following are the list of questions for the user
    .prompt([{
        // questions:
            // team manager:
                // name
                // employee ID
                // email address (interactive)
                // office #
            // menu option to add an engineer or an intern or finish
            // engineer:
                // name
                // employee ID
                // email address (interactive)
                // github username (opens in new tab)
                // take back to the menu options to add another employee
            // intern:
                // name
                // employee ID
                // email address (interactive)
                // school
                // take back to the menu options to add another employee
            // finish creating team
                // exit app and create HTML
    }]);
}
