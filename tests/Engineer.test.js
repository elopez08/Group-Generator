const Engineer = require('../lib/engineer.js');

test('creates an engineer object.', () => {
  const engineer = new Engineer('Sam', 28, 'sammy@gmail.com', 'sammy04');

  expect(engineer.github).toEqual(expect.any(String));
});

test(`gets engineer's GitHub. `, () => {
    const engineer = new Engineer('Sam', 28, 'sammy@gmail.com', 'sammy04');
    expect(engineer.getGithub()).toEqual(expect.any(String));
});

test(`gets engineer's role. `, () => {
    const engineer = new Engineer('Sam', 28, 'sammy@gmail.com', 'sammy04');
    expect(engineer.getRole()).toEqual("Engineer");
});