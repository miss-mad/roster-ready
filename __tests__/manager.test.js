const Manager = require("../lib/manager");

describe("testManager", () => {
  // tests the values in the constructor function within the manager class
  it("should test that the user input builds an manager", () => {
    // define test cases
    const name = "Bianca";
    const id = 2995;
    const email = "b@mosht.com";
    const officeNumber = 17;

    const manager = new Manager(name, id, email, officeNumber);

    // define answer to the test cases
    const managerName = manager.name;
    const managerId = manager.id;
    const managerEmail = manager.email;
    const managerOfficeNumber = manager.officeNumber;

    expect(managerName).toEqual(name);
    expect(managerId).toEqual(id);
    expect(managerEmail).toEqual(email);
    expect(managerOfficeNumber).toEqual(officeNumber);
  });
});
