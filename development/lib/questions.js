
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
message: 'What is school do you attend?',
name: 'school',
}



]

super(name, id, email, officeNumber);

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
message: 'What is your officeNumber?',
name: 'officeNumber',
},
]



module.exports = { engineerQuestions, internQuestions, managerQuestions };