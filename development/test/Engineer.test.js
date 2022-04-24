const Engineer = require('../lib/engineer');


describe('Engineer', () => {

    it('Should return engineer role as engineer ', () => {

        const engineer = new Engineer('name', 'id', 'email', 'github' );

        expect(engineer.getRole()).toEqual('Engineer')

    })

    it('Should return the engineers github', () => {
        const engineer = new Engineer('name', 'id', 'email', 'github' );

        expect(engineer.getGithub()).toEqual('github')

    })




})


   