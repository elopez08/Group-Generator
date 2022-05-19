const Employee = require("./Employee");

//When we are calling a function to write something down for a person, it'll be defined as a whole.  As such, we have three properties that are the same:  Name, Id, and Email.  Because of this and the structure being relatively similar, we are defining this to be a global, AKA super.  So the super will take those that are familiar and add it to its properties.  Meanwhile, there is one information that is changing constantly:  The 4th definition.  In this one, we're taking the officenumber from the manager and adding it to the property
class Manager extends Employee {
    constructor (name, id, email, officeNumber) {
        super (name, id, email);
        this.officeNumber = officeNumber;
    }

    /*
    getOfficeNumber() {
        return this.officeNumber;
    }
    */

    //When we go to the generateHTML, we have this as a returned value.  It'll match in the property there
    getRole() {
        return "Manager";
    }
}

//This one is IMPORTANT
module.exports = Manager;