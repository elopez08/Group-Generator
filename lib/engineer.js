const Employee = require("./Employee");

//Continuing from the intern notes, we now are in doing the github situation as well.  Name, ID, and Email are all the same, which leaves 'github' as its only property that's different.  Thus, making the first three super and the last a different definition
class Engineer extends Employee {
    constructor (name, id, email, github) {
        super (name, id, email);
        this.github = github;
    }
    getGithub() {
        return this.github;
    }
    getRole() {
        return "Engineer";
    }
}

module.exports = Engineer;