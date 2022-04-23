const Engineer =  require('/Users/jessemaun/Documents/UCF/homeWork/Team-Generator-/development/lib/engineer.js')
const Intern = require('/Users/jessemaun/Documents/UCF/homeWork/Team-Generator-/development/lib/intern.js')
const Manager = require('/Users/jessemaun/Documents/UCF/homeWork/Team-Generator-/development/lib/manager.js')
const questions = require('/Users/jessemaun/Documents/UCF/homeWork/Team-Generator-/development/lib/questions.js')
const fs = require('fs')
const inquirer = require('inquirer');

const Elana = new Engineer('e', 8, 'eese', 'jmaun22');



Elana.getGithub();
console.log('fs')

// Questions that will be asked

console.log(questions)

