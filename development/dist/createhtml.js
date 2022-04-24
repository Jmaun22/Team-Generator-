const fs = require("fs");


const addEmployeeList = (employeeList) => {

    let employees = "";

    employeeList.forEach((member) => {

        switch (member.getRole()) {
            case 'Intern':

            employees += ` 
            <!-- Card Intern -->
            <div class="card" style="width: 18rem;">
              <div style="background-color: #F8B400;"> 
              <h2   > ${member.getName()} </h2>
              <h3> <i class="fa fa-graduation-cap" aria-hidden="true"></i>intern</h3>
        
              </div>
        
             
              <div class="card-body" style="background-color: #FAF5E4;">
                <ul class="list-group list-group-flush" >
                  <li class="list-group-item">id: ${member.getId()}</li>
                  <li class="list-group-item">Email: ${member.getEmail()}</li>
                  <li class="list-group-item">School: ${member.getSchool()}</li>
                </ul>
              </div>
              </div>
            
            
            `
                
                break;

            case 'Manager':

            employees += `

            <!-- card Manager -->
            <div class="card" style="width: 18rem;">
              <div style="background-color: #F8B400;"> 
              <h2> ${member.getName()} </h2>
              <h3> <i class="fa fa-coffee" aria-hidden="true"></i>Manager</h3>
        
              </div>
        
             
                <div class="card-body" style="background-color: #FAF5E4;">
                <ul class="list-group list-group-flush" >
                  <li class="list-group-item">id: ${member.getId()}</li>
                  <li class="list-group-item">Email: ${member.getEmail()}</li>
                  <li class="list-group-item">Office Number: ${member.getOfficeNumber()}</li>
                </ul>
              </div>
              
            
            `
                
                break;

            case 'Engineer':

            employees += `
            <!-- card Engineer -->
            <div class="card" style="width: 18rem;">
              <div style="background-color: #F8B400;"> 
              <h2 > ${member.getName()} </h2>
              <h3> <i class="fa fa-cogs" aria-hidden="true"></i>Engineer</h3>
        
              </div>
        
             
              <div class="card-body" style="background-color: #FAF5E4;">
                <ul class="list-group list-group-flush" >
                  <li class="list-group-item">id: ${member.getId()}</li>
                  <li class="list-group-item">Email: ${member.getEmail()}</li>
                  <li class="list-group-item">Git Hub: ${member.getGithub()}</li>
                </ul>
              </div>
              
              </div>
            
            
            `
                
                break;
        
            default:
                break;
        }




    });


    const finshedPage = `
    
    <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Team Generator</title>
    <!-- bootstrap -->
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.0.0/dist/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">
   <!-- Font Awesome -->
    <link rel="stylesheet" href="path/to/font-awesome/css/font-awesome.min.css">
  </head>
<body>
    <!-- nav bar -->
    <!-- Just an image -->
<nav class="navbar navbar-light  
" style="background-color: #FF6363">

    <a class="navbar-brand" href="#">
     
    
      <i class="fa fa-users" aria-hidden="true"></i> 
    </a>
    <h1 style="margin-right: 23rem; color: #FAF5E4;">Team Generator</h1>

  </nav>

  <div class="row" style="display: flex;align-items: center;justify-content: center;margin-top: 1.5rem;">

    ${employees} 

  </div>




    

      <!-- Font awesome -->
      <script defer src="https://use.fontawesome.com/releases/v5.15.4/js/all.js" integrity="sha384-rOA1PnstxnOBLzCLMcre8ybwbTmemjzdNlILg8O7z1lUkLXozs4DHonlDtnE7fpc" crossorigin="anonymous"></script>
    
</body>
</html>
    
    
    
    
    
    
    `

    return finshedPage;

    



}

module.exports = addEmployeeList;


