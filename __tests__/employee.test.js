const Employee = require("../lib/employee");

describe("testEmployee", () => {
  // tests the values in the constructor function within the employee class
  it("should test that the user input builds an employee", () => {
    // define test cases
    const name = "Bianca";
    const id = 2995;
    const email = "b@mosht.com";

    const employee = new Employee(name, id, email);

    // define answer to the test cases
    const employeeName = employee.name;
    const employeeId = employee.id;
    const employeeEmail = employee.email;

    expect(employeeName).toEqual(name);
    expect(employeeId).toEqual(id);
    expect(employeeEmail).toEqual(email);
  });
});
