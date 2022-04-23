class Employee {
    constructor(name, id, email){
        this.name = name;
        this.id = id;
        this.email = email;
    }

    getName(){

        console.log(`email is: ${this.email}`)
    }

    getId() {
        console.log(`Id is ${this.id}`)
    }

    getRole(){
        console.log('Role: Employee')
    }
}

module.exports = Employee