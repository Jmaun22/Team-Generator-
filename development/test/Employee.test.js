const Employee = require('../lib/employee')

describe('Employee', () => {

    it("should return the name of the employee", () =>{

        const employee = new Employee('name', 'id', 'email');

        expect(employee.getName()).toEqual('name');

    })

    it('Should return the employees id', () => {

        const employee = new Employee('name', 'id', 'email');

        expect(employee.getId()).toEqual('id');
    })
    it("Should return the email of the employee", () => {

        const employee = new Employee('name', 'id', 'email');
        
        expect(employee.getEmail()).toEqual('email')
    })



})