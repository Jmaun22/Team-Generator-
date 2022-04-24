const Employee = require('./employee.js');

class Manager extends Employee {
    constructor(name, id, email, officeNumber){

        super(name, id, email, officeNumber);
        this.officeNumber = officeNumber
    }

        getRole(){

            return 'Manager'

            console.log("Role: Manager")

        }
        getOfficeNumber() {

            return this.officeNumber
        }
    



}

module.exports = Manager;


