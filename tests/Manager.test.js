const Manager = require('../lib/manager.js');

test('creates a manager object.', () => {
    const manager = new Manager('Bob', 54, 'bob@gmail.com', 32);
  
    expect(manager.officeNumber).toEqual(expect.any(Number));
});
  
test(`gets manager's officenumber.`, () => {
    const manager = new Manager('Bob', 54, 'bob@gmail.com', 32);
    expect(manager.getOfficeNumber()).toEqual(expect.any(Number));
});

test(`gets manager's role. `, () => {
    const manager = new Manager('Bob', 54, 'bob@gmail.com', 32);
    expect(manager.getRole()).toEqual("Manager");
});