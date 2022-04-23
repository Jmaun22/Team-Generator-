const Employee = require('./employee.js')

class Intern extends Employee {

    constructor(name, id, email, school){
    super(name, id, email, school);
    this.school = school
    }

    getSchool(){
        console.log(`${this.school}`)
    }

    getRole(){
        console.log('Role: Intern')
    }



}

module.exports = Intern;

const jim = new Intern('Jesse', 9, "fdsf", "UCF")

jim.getSchool();

console.log("fsdf")