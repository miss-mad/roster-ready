const Engineer = require("../lib/engineer");

describe("testEngineer", () => {
  // tests the values in the constructor function within the engineer class
  it("should test that the user input builds an engineer", () => {
    // define test cases
    const name = "Bianca";
    const id = 2995;
    const email = "b@mosht.com";
    const github = "username";

    const engineer = new Engineer(name, id, email, github);

    // define answer to the test cases
    const engineerName = engineer.name;
    const engineerId = engineer.id;
    const engineerEmail = engineer.email;
    const engineerGithub = engineer.github;

    expect(engineerName).toEqual(name);
    expect(engineerId).toEqual(id);
    expect(engineerEmail).toEqual(email);
    expect(engineerGithub).toEqual(github);
  });
});
