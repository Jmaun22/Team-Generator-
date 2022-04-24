const Intern = require('../lib/intern');


describe('Intern', () => {

    it('Should return the interns school', () => {

        const joe = new Intern('name', 'id', 'email', 'school')

        expect(joe.getSchool()).toEqual('school');




    })

    it('Should return the interns role as an intern', () => {

        const intern = new Intern('name', 'id', 'email', 'school');

        expect(intern.getRole()).toEqual('Intern');
    })

})


