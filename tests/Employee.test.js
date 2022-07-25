const Employee = require('../lib/employee.js');

test('creates an employee object.', () => {
  const employee = new Employee('Sam', 28, 'sammy@gmail.com');

  expect(employee.name).toEqual(expect.any(String));
  expect(employee.id).toEqual(expect.any(Number));
  expect(employee.email).toEqual(expect.any(String));
});

test('gets employee name.', () => {
    const employee = new Employee('Sam', 28, 'sammy@gmail.com');
    expect(employee.getName()).toEqual(expect.any(String));
});

test('gets employee id number.', () => {
    const employee = new Employee('Sam', 28, 'sammy@gmail.com');
    expect(employee.getId()).toEqual(expect.any(Number));
});

test('gets employee email.', () => {
    const employee = new Employee('Sam', 28, 'sammy@gmail.com');
    expect(employee.getEmail()).toEqual(expect.stringContaining(employee.email.toString()));
});

// gets role from getRole()
test('gets role of employee', () => {
    const employee = new Employee('Nicole', 90, 'nicole.elisaw@gmail.com');

    expect(employee.getRole()).toEqual("Employee");
});