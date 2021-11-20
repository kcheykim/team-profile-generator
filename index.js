const inquirer = require('inquirer');
const generateHTML = require('./src/generateHTML');
const fs = require('fs');

const Employee = require('./lib/Employee');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const Manager = require('./lib/Manager');
const { inherits } = require('util');

const questions = [{
        type: 'input',
        name: 'employeeName',
        message: 'Enter your or the name of the team member: ',
        validate: nameInput => {
            if (nameInput) { return true; } else {
                console.log('Please enter the name of your team member!');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'id',
        message: 'Please enter your or the id of the team member: ',
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
        message: 'Please provide the email address of the member:',
        validate: emailInput => {
            if (emailInput) { return true; } else {
                console.log('Please enter the email of your team member!');
                return false;
            }
        }
    },
    {
        type: 'confirm',
        name: 'confirmMembers',
        message: 'Would you like to add more team members?'
    },
];

const membersArray = [];

function repeat(role, extraInfo) {
    inquirer.prompt(questions)
        .then(({ id, employeeName, email, confirmMembers }) => {
            let member = {
                id,
                employeeName,
                email,
                role,
                extraInfo
            };
            membersArray.push(member);
            console.log(membersArray);
            if (confirmMembers) {
                addMembers();
            } else {
                fs.writeFile('./dist/index.html', generateHTML(membersArray), (err) => {
                    if (err) { console.log('There was an error', err) }
                    console.log("Successful.");
                });
            }
        })
}

function addMembers() {
    inquirer.prompt([{
                type: 'list',
                name: 'role',
                message: 'Select the role of the team member:',
                choices: ['Engineer', 'Intern'],
            },
            {
                type: 'input',
                name: 'extraInfo',
                message: 'For engineer, please provide github username and Intern please provide the school name: ',
                validate: extraInput => {
                    if (extraInput) { return true; } else {
                        console.log('Please provide your office phone number!');
                        return false;
                    }
                }
            }
        ])
        .then(({ role, extraInfo }) => {
            let member = {
                role,
                extraInfo
            };
            repeat(role, extraInfo);
        })

}

function init() {
    inquirer.prompt([{
            type: 'input',
            name: 'extraInfo',
            message: 'Hi manager, please your office phone number: ',
            validate: extraInput => {
                if (extraInput) { return true; } else {
                    console.log('Please provide your office phone number!');
                    return false;
                }
            }
        }])
        .then(({ role, extraInfo }) => {
            role = 'manager';
            let member = {
                role,
                extraInfo
            };
            repeat(role, extraInfo);

        })
}

// Initialize
init();