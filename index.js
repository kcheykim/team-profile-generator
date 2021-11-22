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
        validate: nameInput => { if (nameInput) { return true; } else { return false; } }
    },
    {
        type: 'input',
        name: 'id',
        message: 'Please enter your or the id of the team member: ',
        validate: idInput => { if (idInput) { return true; } else { return false; } }
    },
    {
        type: 'input',
        name: 'email',
        message: 'Please provide the email address of the member:',
        validate: emailInput => { if (emailInput) { return true; } else { return false; } }
    },
    {
        type: 'confirm',
        name: 'confirmMembers',
        message: 'Would you like to add more team members?'
    },
];

const membersArray = [];

function addMembers() { //function adds more employee of engineer or intern
    inquirer.prompt([{
            type: 'list',
            name: 'role',
            message: 'Select the role of the team member:',
            choices: ['Engineer', 'Intern'],
        },
        {
            type: 'input',
            name: 'extraInfo',
            message: 'For engineer enter github username or enter school name for intern: ',
            validate: extraInput => { if (extraInput) { return true; } else { return false; } }
        }
    ]).then(({ role, extraInfo }) => { repeat(role, extraInfo); })
}

function repeat(role, extraInfo) { //repeat prompt the series of questions and create new Employees
    inquirer.prompt(questions)
        .then(({ id, employeeName, email, confirmMembers }) => {
            let member;
            if (role === 'manager') { //creating new employees: intern, engineer, manager
                member = new Manager(employeeName, id, email, extraInfo)
            } else if (role === 'Engineer') {
                member = new Engineer(employeeName, id, email, extraInfo)
            } else if (role === 'Intern') { member = new Intern(employeeName, id, email, extraInfo) }
            membersArray.push(member); //push the result onto the array
            if (confirmMembers) { addMembers(); } else { //check to add more member by calling addMember()
                fs.writeFile('./dist/index.html', generateHTML(membersArray), (err) => {
                    //wrote to index.html by calling generateHTML file and passing the array
                    if (err) { console.log('There was an error', err) } //error
                    console.log("Successful."); //success
                });
            }
        })
}

function init() { //prompt mananger for office no., call repeat() asking  the series of quesitions
    inquirer.prompt([{ //asking for the office number
        type: 'input',
        name: 'extraInfo',
        message: 'Hi manager, please your office phone number: ',
        validate: extraInput => { if (extraInput) { return true; } else { return false; } }
    }]).then(({ role, extraInfo }) => {
        role = 'manager'; //set the role to manager, then call repeat function
        repeat(role, extraInfo);
    })
}

// calling the init function
init();