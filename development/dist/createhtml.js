const fs = require("fs");


const addEmployeeList = (employeeList) => {

    let employees = "";

    employeeList.forEach((member) => {

        switch (member.getRole()) {
            case 'Intern':

            employees += ` yo`
                
                break;

            case 'Manager':

            employees += ` manager`
                
                break;

            case 'Engineer':

            employees += `Engineer`
                
                break;
        
            default:
                break;
        }




    });



}
