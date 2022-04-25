const Employee = require("./employee.js")

class Engineer extends Employee {

    constructor(name, id, email, github, gitlink){
        super(name, id, email, github, gitlink)
        this.github = github;
        this.gitlink = gitlink;
    }

    getRole(){
        return 'Engineer'
       
    }
    getGithub(){
        return this.github
       

    }

    gitHubLink(){

        return this.gitlink

    }



}


// const joe = new Engineer('j', 'r', 't', 'f', 'g')

// console.log(`${joe.getGithub()}, ${joe.gitHubLink()}`);

module.exports = Engineer;

