# Group Generator — Project Review

Reviewed October 27, 2026. **Static source review only; application and tests have not been executed.** Original application files are unchanged.

## Purpose

Node.js command-line team roster generator. Inquirer collects Manager, Engineer, and Intern details; JavaScript classes represent employees; a template function generates an HTML roster at `output/team.html`. The README includes extensive learning notes on prompts, promises, inheritance, regular expressions, HTML generation, and tests.

## Source map

| Path | Responsibility |
|---|---|
| `index.js` | Prompts, validation, branching, output path, file writing |
| `lib/employee.js` | Base class with name, ID, email, getters, role |
| `lib/manager.js` | Manager extends Employee; office number |
| `lib/engineer.js` | Engineer extends Employee; GitHub username |
| `lib/intern.js` | Intern extends Employee; school |
| `src/generateHTML.js` | Builds role-specific cards and HTML document |
| `tests/Employee.test.js` | Five Jest tests |
| `tests/Manager.test.js` | Three Jest tests |
| `tests/Engineer.test.js` | Three Jest tests |
| `tests/Intern.test.js` | Three Jest tests |
| `package.json` | Inquirer dependency; Jest test script |
| `README.md` | Project explanation and development notes |

## How it works

1. `node index.js` invokes `runApp()` and `createGroup()`.
2. Inquirer asks which employee role to add or whether to finish.
3. Role-specific questions gather name, ID, email, and office/GitHub/school information.
4. The program constructs a `Manager`, `Engineer`, or `Intern` and pushes it to `teamArray`.
5. The menu repeats until Finish.
6. `generateHTML(teamArray)` checks each object's `getRole()` and renders the corresponding card.
7. `fs.writeFileSync` saves the resulting page to `output/team.html`.

Shared fields are inherited from `Employee` using `extends` and `super`. The generated HTML uses Bootstrap markup, email links, and engineer GitHub links.

## Source-level issues to reproduce and repair

1. **Filename case mismatch:** `lib/manager.js`, `lib/engineer.js`, and `lib/intern.js` import `./Employee`, but the source file is `employee.js`. This may fail on Linux and other case-sensitive systems.
2. **Jest not declared:** `package.json` runs `jest` but only lists `inquirer` as a dependency. Install Jest explicitly before expecting `npm test` to work.
3. **Output directory:** `index.js` writes `output/team.html` without creating `output/`. Confirm the directory exists or use `fs.mkdirSync(OUTPUT_DIR,{recursive:true})`.
4. **Implicit globals:** `teamArray`, `generateHTML`, `pageArray`, and regex variables are assigned without declarations. Use `const` or `let`.
5. **ID types:** Inquirer text prompts return strings, while class tests construct numeric IDs. Preserve leading zeroes and make expected types consistent.
6. **Validation regex:** The intended seven-digit ID and two-digit office number regexes allow extra characters. If strict lengths are intended, use `/^\d{7}$/` and `/^\d{2}$/`.
7. **Inconsistent name rules:** Manager names require only nonempty text, while engineer/intern names require two ASCII words. Consider a consistent policy that handles real names.
8. **Unsafe HTML interpolation:** Input values are directly interpolated into generated HTML. Escape special characters and validate link destinations.
9. **Manager-first flow:** The CLI allows an engineer/intern or immediate Finish before a manager, unlike the README's acceptance criteria.
10. **GitHub links:** The README expects a new tab; the generated link lacks `target="_blank"` and `rel="noopener noreferrer"`.
11. **Stylesheet:** Generated HTML links to `style.css` relative to the output file; verify it is present in that directory.
12. **Tests:** Four suites declare 14 tests, but only check class properties/getters/roles. Add tests for CLI validation, generated HTML, file output, and unusual inputs. One Intern test description mistakenly mentions engineer email.

These are source observations, **not confirmed runtime test results**.

## Rebuild safely

Preserve the original branch and work on a new one:

```bash
git clone https://github.com/elopez08/Group-Generator.git
cd Group-Generator
git switch -c revival/group-generator
npm install
```

First fix case-sensitive imports and check the output directory. If Jest is missing, add it as a development dependency:

```bash
npm install --save-dev jest
npm test
node index.js
```

Enter **dummy employee information**, finish the prompts, and inspect `output/team.html`. Check the generated cards, mail links, GitHub links, and CSS. Record real test results before calling the application working.

## Suggested verification checklist

- [x] Inspect README and project structure
- [x] Inspect classes and inheritance
- [x] Trace prompts through generated HTML
- [x] Inspect four test suites (14 tests)
- [x] Identify likely defects
- [ ] Install dependencies and run Jest
- [ ] Correct filename case and output-directory handling
- [ ] Generate and inspect a sample HTML roster
- [ ] Fix validation and escaping
- [ ] Add tests for HTML and invalid inputs
- [ ] Document confirmed fixes and screenshots

## Portfolio framing

This educational project demonstrates JavaScript OOP, inheritance, Node.js CLI automation, input validation, HTML templates, and unit testing. The README contains assignment-style criteria, so compare starter code before asserting that the entire project was independently authored.

Suggested description: **Group Generator (Node.js, JavaScript)** — Worked on a command-line tool that collects team member details with Inquirer, organizes them using employee subclasses, and generates an HTML team roster; documented validation and Jest testing.

**Review complete. Runtime reconstruction pending.**
