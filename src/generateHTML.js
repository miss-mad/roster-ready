// importing information from other files using require
const Engineer = require("../lib/engineer");
const Intern = require("../lib/intern");
const Manager = require("../lib/manager");

// function expression to generate the HTML - the markup is between two backticks
const generateHTML = (answers) => {
  const manager = new Manager(
    answers.manager[0].managerName,
    answers.manager[0].managerId,
    answers.manager[0].managerEmail,
    answers.manager[0].managerOfficeNumber
  );

  const engineer = new Engineer(
    answers.engineer[0].engineerName,
    answers.engineer[0].engineerId,
    answers.engineer[0].engineerEmail,
    answers.engineer[0].engineerGithub
  );

  const intern = new Intern(
    answers.intern[0].internName,
    answers.intern[0].internId,
    answers.intern[0].internEmail,
    answers.intern[0].internSchool
  );

  // HTML here via string interpolation
  return `<!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta http-equiv="X-UA-Compatible" content="IE=edge" />
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1.0, maximum-scale=1.0"
      />
      <meta
        name="description"
        content="info about your page that appears in the search engine results below the title/URL of your page"
      />
      <link
        rel="stylesheet"
        href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css"
      />
      <link
        href="https://fonts.googleapis.com/icon?family=Material+Icons"
        rel="stylesheet"
      />
      <link
        rel="stylesheet"
        href="./styles.css"
        type="text/css"
      />
      <title>Roster Ready</title>
    </head>
    <body>
    <div class="card-header text-center">Workplace Roster</div>
    <div class="card-group">

      <div class="card" style="width: 18rem">
        <div class="card-body">
          <h5 class="card-title"><i class="large material-icons">flare</i>${manager.name} - Manager</h5>
          <ul class="list-group list-group-flush">
            <li class="list-group-item">ID: ${manager.id}</li>
            <li class="list-group-item">
              Email: <a href="mailto:${manager.email}">${manager.email}</a>
            </li>
            <li class="list-group-item">
              Office Number: ${manager.officeNumber}
            </li>
          </ul>
        </div>
      </div>
  
      <div class="card" style="width: 18rem">
        <div class="card-body">
          <h5 class="card-title"><i class="material-icons">audiotrack</i>${engineer.name} - Engineer</h5>
          <ul class="list-group list-group-flush">
            <li class="list-group-item">ID: ${engineer.id}</li>
            <li class="list-group-item">
              Email: <a href="mailto:${engineer.email}">${engineer.email}</a>
            </li>
            <li class="list-group-item">
              Github:
              <a href="https://github.com/${engineer.github}" target="_blank"
                >${engineer.github}</a
              >
            </li>
          </ul>
        </div>
      </div>
  
      <div class="card" style="width: 18rem">
        <div class="card-body">
          <h5 class="card-title"><i class="material-icons">local_florist</i>${intern.name} - Intern</h5>
          <ul class="list-group list-group-flush">
            <li class="list-group-item">ID: ${intern.id}</li>
            <li class="list-group-item">
              Email: <a href="mailto:${intern.email}">${intern.email}</a>
            </li>
            <li class="list-group-item">School: ${intern.school}</li>
          </ul>
        </div>
      </div>
      </div>
    </body>
  </html>
  `;
};

// export this file to be accessed elsewhere
module.exports = generateHTML;
