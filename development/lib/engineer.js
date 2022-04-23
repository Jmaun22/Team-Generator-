const Employee = require("./employee.js")

class Engineer extends Employee {

    constructor(name, id, email, github){
        super(name, id, email, github)
        this.github = github
    }

    getRole(){
        console.log('Role: Engineer')
    }
    getGithub(){
        console.log(`${this.github}`)

    }



}

module.exports = Engineer;

const Elana = new Engineer('e', 8, 'eese', 'jmaun22');

Elana.getGithub();