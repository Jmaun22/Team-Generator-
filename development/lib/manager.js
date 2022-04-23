const Employee = require('./employee.js');

class Manager extends Employee {
    constructor(name, id, email, officeNumber){

        super(name, id, email, officeNumber);
        this.officeNumber = officeNumber
    }

        getRole(){
            console.log("Role: Manager")

        }
    



}

module.exports = Manager;

const man = new Manager('joe', 9, "fsf", 4)
man.getRole();
console.log(`${man.name}, ${man.email}, ${man.id}`)

