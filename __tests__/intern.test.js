const Intern = require("../lib/intern");

describe("testIntern", () => {
  // tests the values in the constructor function within the intern class
  it("should test that the user input builds an intern", () => {
    // define test cases
    const name = "Bianca";
    const id = 2995;
    const email = "b@mosht.com";
    const school = "MIT";

    const intern = new Intern(name, id, email, school);

    // define answer to the test cases
    const internName = intern.name;
    const internId = intern.id;
    const internEmail = intern.email;
    const internSchool = intern.school;

    expect(internName).toEqual(name);
    expect(internId).toEqual(id);
    expect(internEmail).toEqual(email);
    expect(internSchool).toEqual(school);
  });
});
