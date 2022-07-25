const Employee = require("./Employee");

//In regards to the information from the manager, noticed that now that the 4th value changed.  This one is not the super variable, thus, we need to identify it as such.  The others, however, are similar, so those properties are the same, which in turn, is super.
class Intern extends Employee {
    constructor (name, id, email, school) {
        super (name, id, email);
        this.school = school;
    }

    getSchoolName() {
        return this.school;
    }

    getRole() {
        return "Intern";
    }
}

module.exports = Intern;