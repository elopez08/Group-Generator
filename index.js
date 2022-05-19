const Manager = require("./lib/manager.js");
const Engineer = require("./lib/engineer.js");
const Intern = require("./lib/intern.js");

const generateHTML = require("./src/generateHTML.js");
const path = require("path");

//Defining the name of the output path:
const OUTPUT_DIR = path.resolve(__dirname, "output");
//With the output path naming as 'output', it is then put in the directory of this path.  This means now that the line string of code will now be ./output/ with the team.html being the end of it.
const outputPath = path.join(OUTPUT_DIR, "team.html");


const fs = require("fs");
const inquirer = require("inquirer");


teamArray = [];

function runApp () {
    function createGroup() {
        inquirer.prompt([{
            type: "list",
            message: "What type of employee would you like to add to your team?",
            name: "addEmployeePrompt",
            choices: ["Manager", "Engineer", "Intern", "No more team members are needed."]
            }])
            .then(function (userInput) {
                //We're going to go by the cases.  That addEmployeePrompt is the name of the property from above.  So when we choose "Manager", that will now convert to that name from the userInput
                    switch(userInput.addEmployeePrompt) {
                    case "Manager":
                        //Switch this to the function down below
                        addManager();
                        break;
                    case "Engineer":
                        addEngineer();
                        break;
                    case "Intern":
                        addIntern();
                        break;
            
                    //If this option is selected, then that means it'll go straight to the builder, which means it'll end the code running.
                    default:
                        htmlBuilder();
                    }
            })
    }

    function addManager () {
        inquirer.prompt([
            {
                type: "input",
                name: "managerName",
                message: "What is the manager's name?",
                validate: nameinput => {
                    if(nameinput)
                    {
                        return true;
                    }
                    else
                    {
                        console.log(`Please type in the manager's name! (Required)`);
                        return false;
                    }
                }
            },
            {
                type: "input",
                name: "managerID",
                message: "What is the manager's ID?",
                validate(idnumber) {
                    idRegex = /^[$]?\d{7}[\d{7},]*$/
                    if(!idRegex.test(idnumber))
                    {
                        return `Not a valid ID Number.  Please type in a 7 digit ID number for the manager.`;
                    }
                    else
                    {
                        return true;
                    }
                }

            },
            {
                type: "input",
                name: "managerEmail",
                message: "What is the manager's email address?",
                validate: emailinput => {
                    if(emailinput)
                    {
                        return true;
                    }
                    else
                    {
                        console.log(`Type in the intern's school name!`);
                        return false;
                    }
                }
            },
            {
                type: "input",
                name: "managerOfficeNumber",
                message: "What is the manager's Office Number?",
                validate(officenumber) {
                    officenumberRegex = /^[$]?\d{2}[\d{2},]*$/
                    if(!officenumberRegex.test(officenumber))
                    {
                        return `Not a valid number.  Please type in a room number for the manager.`;
                    }
                    else
                    {
                        return true;
                    }
                }
            }
            
        ]).then(answers => {
            const manager = new Manager(answers.managerName, answers.managerId, answers.managerEmail, answers.managerOfficeNumber);
            //Pushed to an empty array that has a push of 'manager'.  If we look at the other file, we see that it has three functions.  If this is matching that speccific function, then that means it'll go to that property instead
            teamArray.push(manager);
            //Returning the sender back to the beginning
            createGroup();
        });
    }
    
    //I am prompted to enter the engineer’s name, ID, email, and GitHub username, and I am taken back to the menu
    function addEngineer () {
        inquirer.prompt([
            {
                type: "input",
                name: "engineerName",
                message: "What is the engineer's name?",
                validate: engnameinput => {
                    if(engnameinput)
                    {
                        return true;
                    }
                    else
                    {
                        console.log(`Please type in the engineer's name! (Required)`);
                        return false;
                    }
                }

            },
            {
                type: "input",
                name: "engineerID",
                message: "What is the engineer's ID number?",
                validate(engidnumber) {
                    idRegex = /^[$]?\d{7}[\d{7},]*$/
                    if(!idRegex.test(engidnumber))
                    {
                        return `Not a valid ID Number.  Please type in a 7 digit ID number for the manager.`;
                    }
                    else
                    {
                        return true;
                    }
                }

            },
            {
                type: "input",
                name: "engineerEmail",
                message: "What is the engineer's email address?"
            },
            {
                type: "input",
                name: "engineerGithub",
                message: "What is the engineer's GitHub username?",
                validate: githubinput => {
                    if(githubinput)
                    {
                        return true;
                    }
                    else
                    {
                        console.log(`Please type in the Engineer's User name! (Required)`);
                        return false;
                    }
                }

            }
        ])
        .then(answers => {
            const engineer = new Engineer(answers.engineerName, answers.engineerID, answers.engineerEmail, answers.engineerGithub);
            teamArray.push(engineer);
            createGroup();
        })
    }
    
    //I am prompted to enter the intern’s name, ID, email, and school, and I am taken back to the menu
    function addIntern () {
        inquirer.prompt([
            {
                type: "input",
                name: "internName",
                message: "What is the intern's name?",
                validate: nameinput =>
                {
                    if(nameinput)
                    {
                        return true;
                    }
                    else
                    {
                        console.log("Please type in the intern's name!");
                        return false;
                    }
                }
            },
            {
                type: "input",
                name: "internID",
                message: "What is the intern's ID?",
                validate(internidnumber) {
                    idRegex = /^[$]?\d{7}[\d{7},]*$/
                    if(!idRegex.test(internidnumber))
                    {
                        return `Not a valid ID Number.  Please type in a 7 digit ID number for the manager.`;
                    }
                    else
                    {
                        return true;
                    }
                }
            },
            {
                type: "input",
                name: "internEmail",
                message: "What is the intern's email address?"
            },
            {
                type: "input",
                name: "internSchool",
                message: "What is the intern's school they are enrolled in?",
                validate: schoolinput => {
                    if(schoolinput)
                    {
                        return true;
                    }
                    else
                    {
                        console.log(`Type in the intern's school name!`);
                        return false;
                    }
                }

            }
        ]).then(answers => {
            const engineer = new Intern(answers.internName, answers.internID, answers.engineerEmail, answers.internSchool);
            teamArray.push(engineer);
            //Back to start
            createGroup();
        })
    }

    function htmlBuilder () {
        console.log(`The team has been created!`)
        fs.writeFileSync(outputPath, generateHTML(teamArray), "UTF-8")
    }
    

    createGroup();
    

}

runApp();