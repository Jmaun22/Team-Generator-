
const engineerQuestions = [
    {type: 'input',
    message: 'What is your name/',
    name: 'name',
  },
  {type: 'input',
  message: 'What is your id?',
  name: 'id',
},
  {type: 'input',
    message: 'What is your email?',
    name: 'email',
  },

  {type: 'input',
  message: 'What is your gitHub username?',
  name: 'github',
},
{type: 'input',
message: 'What is the link to your gitHub account?',
name: 'gitlink',
},

{type: 'list',
message: 'Would you like to add another(yes or no)?',
name: 'addAnother',
choices: ['yes', 'no']
},

];



const internQuestions =  [

    {type: 'input',
    message: 'What is your name?',
    name: 'name',
  },
  {type: 'input',
  message: 'What is your id?',
  name: 'id',
},
{type: 'input',
message: 'What is your email?',
name: 'email',
},
{type: 'input',
message: 'What school do you attend?',
name: 'school',
},

{type: 'list',
message: 'Would you like to add another(yes or no)?',
name: 'addAnother',
choices: ['yes', 'no']
},



]



const managerQuestions = [

    {type: 'input',
    message: 'What is your name?',
    name: 'name',
  },
  {type: 'input',
  message: 'What is your id?',
  name: 'id',
},

{type: 'input',
message: 'What is your email?',
name: 'email',
},

{type: 'input',
message: 'What is your office Number?',
name: 'officeNumber',
},
{type: 'list',
message: 'Would you like to add another(yes or no)?',
name: 'addAnother',
choices: ['yes', 'no']
},
]



module.exports = { engineerQuestions, internQuestions, managerQuestions };