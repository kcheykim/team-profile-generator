# Team Profile Generator

#### This page is licensed under (click badge for license page): 
[![license](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## Description
Team Profile Generator will generate an html page that display each team member and their information. The application will prompt the manager for the their office phone number, name, id and email address. Then it will ask if the the manager would like to add more team members with the choice of an engineer or an intern? For the engineer, the information includes: name, id, email, and github username. For the intern, the information includes: name, id, email, and school name. Each prompt will be validate and will not allow the user to move on without an input. This application will run npm test to ensure the tests are correct. Then the application can be invoked with $node index. After the manager input all the team members, an index.html page will be created to display all the the team members.

## Table of Contents
* [Installation](#installation)
* [Usage](#usage)
* [Credits](#credits)
* [License](#license) 
* [Contributing](#contributing)
* [Test](#test)  
* [Questions](#questions)

## Installation
$git clone https://github.com/kcheykim/team-profile-generator.git<br />$rm package.json<br />$npm init<br />$npm install inquirer (@root)<br />$npm install jest --save-dev

## Usage
Here is how this application works:  
![team-profile-generator](./dist/team-profile-generator.gif?raw=true) <br />
Here is the link to the video: 

## Credits
Here are the list of collaborators:  
Kosal Cheykim

## License
Notice: This license is covered under (https://opensource.org/licenses/MIT)

## Contributing
[![Contributor Covenant](https://img.shields.io/badge/Contributor%20Covenant-2.1-4baaaa.svg)](code_of_conduct.md)

## Test
Here is the instruction test: $npm test (after installing jest)<br/>
Here is the instruction to run the application: $node index (after installing inquirer)

## Questions
More Questions? Contact me via:  
GitHub: http://github.com/kcheykim  
Email: kosalcheykim@gmail.com