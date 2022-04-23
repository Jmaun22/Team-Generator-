const Employee = require('development/lib/employee.js');

class Manager extends Employee {
    constructor(name, id, email, officeNumber){

        super(name, id, email, officeNumber);
        this.officeNumber = officeNumber
    }

        getRole(){
            console.log("Role: Manager")

        }
    



}