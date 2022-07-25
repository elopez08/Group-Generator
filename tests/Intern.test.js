const Intern = require('../lib/intern.js');

test('creates an Intern object.', () => {
  const intern = new Intern('Mike', 30, 'mike@gmail.com', 'UCLA');

  expect(intern.school).toEqual(expect.any(String));
});


test('gets engineer email.', () => {
    const intern = new Intern('Mike', 30, 'mike@gmail.com', 'UCLA');
    expect(intern.getSchoolName()).toEqual(expect.any(String));
});

test(`gets intern's role. `, () => {
    const intern = new Intern('Mike', 30, 'mike@gmail.com', 'UCLA');
    expect(intern.getRole()).toEqual("Intern");
});