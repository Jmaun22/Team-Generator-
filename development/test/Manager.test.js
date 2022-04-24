const Manager = require('../lib/manager');

describe('Manager', () =>{

    it('returns the role of the manager as manager', () => {

        const manager = new Manager('name', 'id', 'email', 'officeNumber')

        expect(manager.getRole()).toEqual('Manager');
    })

    it('Returns the office number of the manager', () => {

        const manager = new Manager('name', 'id', 'email', 'officeNumber')

        expect(manager.getOfficeNumber()).toEqual('officeNumber')

    })





})


