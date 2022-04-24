const Engineer =  require('/Users/jessemaun/Documents/UCF/homeWork/Team-Generator-/development/lib/engineer.js')
const Intern = require('/Users/jessemaun/Documents/UCF/homeWork/Team-Generator-/development/lib/intern.js')
const Manager = require('/Users/jessemaun/Documents/UCF/homeWork/Team-Generator-/development/lib/manager.js')
const questions = require('/Users/jessemaun/Documents/UCF/homeWork/Team-Generator-/development/lib/questions.js')
const fs = require('fs')
const inquirer = require('inquirer');
const Choices = require('inquirer/lib/objects/choices')
const Choice = require('inquirer/lib/objects/choice')

const Elana = new Engineer('e', 8, 'eese', 'jmaun22');

// Creates a list to hold each employee that is created

employeeList = [];


// ask which memebr of team you want

const pickTeammember = () => { 

inquirer
.prompt([

    {type: 'list',
    message: 'Which type of employee would you like to add?',
    name: 'employeeType',
    choices: ['Intern', 'Manager', 'Engineer']
    
}
])
.then(pick => {
   if(pick.employeeType === 'Intern'){
    collectInternQuestions();

   } else if(pick.employeeType === 'Manager'){

    collectManagerQuestions();

   } else if(pick.employeeType === 'Engineer'){
    collectEngineerQuestions();

   }
})
}
  
pickTeammember();


// Collect intern questions

const collectInternQuestions = () => {

    inquirer.prompt(questions.internQuestions)

    .then(response => {
//     constructor(name, id, email, school){
        const intern = new Intern(response.name, response.id, response.email, response.school);

        

        console.log(intern)
        employeeList.push(intern);

        if(response.addAnother == 'yes'){

            pickTeammember();

        } else {

            let html = addEmployeeList(employeeList);

            
        }

    })




}

// Collect Manager questions

const collectManagerQuestions = () => {

    inquirer.prompt(questions.managerQuestions)
    .then(response => {
        // constructor(name, id, email, officeNumber){

        const manager = new Manager(response.name, response.id, response.email, response.officeNumber);
        console.log(manager)
        employeeList.push(manager);
    })

}


// Collect Engineer questions

const collectEngineerQuestions = () => {

    inquirer.prompt(questions.engineerQuestions)
    .then(response => {
        //  constructor(name, id, email, github){
        const engineer = new Engineer(response.name, response.id, response.email, response.github);
        console.log(engineer)
        employeeList.push(engineer);
    })

}



// generate html card for it

// continue until no more memeber are needed



// This function will initalize the app
function init() {



    inquirer
    .prompt(questions)
  
    .then((data) => {
  
      readMe = generateMarkdown(data);
  
      fs.writeFile('README.md', readMe, (err) =>
      // TODO: Describe how this ternary operator works
      err ? console.error(err) : console.log('Commit logged!')
    );
    
    }).catch((err) => {
        if (err) throw err
    });
  
  
  }

