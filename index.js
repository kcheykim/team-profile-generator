const inquirer = require('inquirer');
const generateHTML = require('./src/generateHTML');
const fs = require('fs');

const Employee = require('./lib/Employee');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const Manager = require('./lib/Manager');

const questions = [{
        type: 'input',
        name: 'employeeName',
        message: 'Enter the name of the team member: ',
        validate: nameInput => {
            if (nameInput) { return true; } else {
                console.log('Please enter the name of your team member!');
                return false;
            }
        }
    },
    {
        type: 'list',
        name: 'role',
        message: 'Select the role of the team member:',
        choices: ['Engineer', 'Intern', 'Manager'],
    },
    {
        type: 'input',
        name: 'id',
        message: 'Please enter the id of the team member: ',
        validate: idInput => {
            if (idInput) { return true; } else {
                console.log('Please enter the id of your team member!');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'email',
        message: 'Please provide the email of your team member:',
        validate: emailInput => {
            if (emailInput) { return true; } else {
                console.log('Please enter the email of your team member!');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'extraInfo',
        message: 'Please provide the following: manager - office number, engineer - github acct., intern - school name: ',
        validate: extraInput => {
            if (extraInput) { return true; } else {
                console.log('Please provide the information according to your role!');
                return false;
            }
        }
    },
    {
        type: 'confirm',
        name: 'confirmMembers',
        message: 'Would you like to add more team members?'
    }
];

const membersArray = [];

function repeat() {
    inquirer.prompt(questions)
        .then(({ id, employeeName, email, role, confirmMembers }) => {
            let member = {
                id,
                employeeName,
                email,
                role
            };
            membersArray.push(member);
            if (confirmMembers) {
                repeat();
            } else {
                fs.writeFile('./dist/index.html', generateHTML(membersArray), (err) => {
                    if (err) { console.log('There was an error', err) }
                    console.log("Successful.");
                });
            }
        })
}

// Initialize 
repeat();