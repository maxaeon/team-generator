const inquirer = require('inquirer');
const Employee = require('./lib/Employee.js');
const Engineer = require('./lib/Engineer.js');
const Intern   = require('./lib/Intern.js');
const Manager   = require('./lib/Manager.js');
const fs       = require('fs');
const generateHTML = require('./src/generateHTML.js');
let employeeObjects = require('./src/employeeObjects.js');
const roleRender = require('./src/generateHTML.js');

const employee = function employee() {
    inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'What is the team manager\'s name?', 
        },
        {
            type: 'input',
            name: 'ID',
            message: 'What is the team manager\'s employee ID?', 
        },
        {
            type: 'input',
            name: 'email',
            message: 'What is the team manager\'s email?', 
        },
        {
            type: 'input',
            name: 'officeNumber',
            message: 'What is the team manager\'s office number?', 
        },
        {
            type: 'list',
            name: 'selectEmployee',
            message: 'Which employee data do you want to enter now?',
            choices: [
                'Engineer',  
                'Intern', 
                'Finish building team'
            ],
        }
    ])
        
    .then((answers) => { 
        let newEmployee = new Manager(answers.name, answers.ID, answers.email, answers.officeNumber);
        employeeObjects.push(newEmployee);
        if (answers.selectEmployee === 'Engineer') {
            engineer();
        } else if (answers.selectEmployee === 'Intern') {
            intern();
        }else {
            // roleRender(employeeObjects);
            fs.writeFile('./dist/index.html', generateHTML(employeeObjects), () => {
                console.log('Generating HTML file.');
            });
        } 
    })
}

function engineer() {
    inquirer.prompt([
        {
            type: 'input',
            name: 'engineerName',
            message: 'What is the engineer\'s name?'
        },
        {
            type: 'input',
            name: 'engineerID',
            message: 'What is the engineer\'s ID?'
        },
        {
            type: 'input',
            name: 'engineerEmail',
            message: 'What is the engineer\'s email?'
        },
        {
            type: 'input',
            name: 'engineerUsername',
            message: 'What is the engineer\'s github username?'
        },
        {
            type: 'list',
            name: 'selectEmployee',
            message: 'Which employee data do you want to enter now?',
            choices: [
                'Engineer',  
                'Intern', 
                'Finish building team'
            ]
        }
    ])
    .then(answers => { 
        let newEngineer = new Engineer(answers.engineerName, answers.engineerID, answers.engineerEmail, answers.engineerUsername);
        employeeObjects.push(newEngineer);

        if (answers.selectEmployee === 'Engineer') {
            engineer();
        } else if (answers.selectEmployee === 'Intern') {
            intern();
        }else {
            fs.writeFile('./dist/index.html', generateHTML(employeeObjects), () => {
                console.log('Generating HTML file.');
            });
        } 
    })
    .catch(err => console.log(err))
}

function intern() {
    inquirer.prompt([
        {
            type: 'input',
            name: 'internName',
            message: 'What is the intern\'s name?'
        },
        {
            type: 'input',
            name: 'internID',
            message: 'What is the intern\'s ID number?'
        },
        {
            type: 'input',
            name: 'internEmail',
            message: 'What is the intern\'s email address?'
        },
        {
            type: 'input',
            name: 'internSchool',
            message: 'Which school does the intern attend?'
        },
        {
            type: 'list',
            name: 'selectEmployee',
            message: 'Which employee data do you want to enter now?',
            choices: [
                'Engineer',  
                'Intern', 
                'Finish building team'
            ]
        }
        
    ])
    .then((answers) => { 
        let newIntern = new Intern(answers.internName, answers.internID, answers.internEmail, answers.internSchool);
        employeeObjects.push(newIntern);
        if (answers.selectEmployee === 'Engineer') {
            engineer();
        } else if (answers.selectEmployee === 'Intern') {
            intern();
        }else {
            fs.writeFile('./dist/index.html', generateHTML(employeeObjects), () => {
                console.log('Generating HTML file.');
            });
        } 
    })
}

employee();