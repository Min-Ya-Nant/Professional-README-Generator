// // (step: 1)
// const fs = require('fs');
// const inquirer = require('inquirer');


// // step 2: readmeFile Function to prompt user for README details
// const readmeFile = () => {
//     return inquirer.prompt([
//         {
//             type: 'input',
//             name: 'title', 
//             message: 'What is the title of your project?',
//             // မပါလဲရတယ် 
//             validate: titleInput => {
//                 if (titleInput) {
//                     return true;
//                 } else {
//                     console.log('Please enter your project title!');
//                     return false;
//                 }
              
          
//             }
//         },
//         {
//             type: 'input',
//             name: 'description',
//             message: 'Provide a short description of your project:',
//         },
//         {
//             type: 'input',
//             name: 'installation',
//             message: 'How do you install your project?',
//         },
//         {
//             type: 'input',
//             name: 'usage',
//             message: 'How do you use your project?'
//         },
//         {
//             type: 'input',
//             name: 'License',
//             message: 'What is Your license?'
//         },
       
//         {
//             type: 'checkbox',
//             name: 'languages',
//             message: 'What did you this project with? (Check all that apply)',
//             choices: ['JavaScript', 'HTML', 'CSS', 'ES6', 'jQuery', 'Bootstrap', 'Node']
//         },
//         {
//             type: 'input',
//             name: 'github',
//             message: 'Enter your GitHub Username (Required)',
//             validate: githubInput => {
//               if (githubInput) {
//                 return true;
//               } else {
//                 console.log('Please enter your GitHub username!');
//                 return false;
//               }
//             }
//         }
         
    
//     ]);
// };

// // step 3: Function to format the README content
// const ReadMeContent = (data) => {
//     return `
// # ${data.title}

// ## Description
// ${data.description}

// ## Installation
// ${data.installation}

// ## Usage
// ${data.usage}

// ## License
// ${data.License}

// ## language
// ${data.languages}

// ## github 
// ${data.github}
//     `;
// };

// // step 4: Run the readmeFile function and generate README file
// readmeFile()
//   .then(data => {
//     // pageContent for ReadMeContent <69>
//     const pageContent = ReadMeContent(data);

//     // Write content to README.md file
//     fs.writeFile('./README.md', pageContent, err => {
//       if (err) throw new Error(err);

//       console.log('README file created! Check out README.md in this directory to see it!');

//       // This operator is frequently used as a shortcut for the if statement.
//     //   err ? console.log(err) : console.log('README file created!');
//       console.log('You have done!')
//     });
//   });

const inquirer = require('inquirer');
const fs = require('fs');

// မေးခွန်းများ
const questions = [
  {
    type: 'input',
    name: 'title',
    message: 'Project Title:',
  },
  {
    type: 'input',
    name: 'description',
    message: 'Project Description:',
  },
  {
    type: 'input',
    name: 'installation',
    message: 'Installation Instructions:',
  },
  {
    type: 'input',
    name: 'usage',
    message: 'Usage Information:',
  },
  {
    type: 'input',
    name: 'contributing',
    message: 'Contribution Guidelines:',
  },
  {
    type: 'input',
    name: 'tests',
    message: 'Test Instructions:',
  },
  {
    type: 'list',
    name: 'license',
    message: 'Choose a License:',
    choices: ['MIT', 'GPLv3', 'Apache 2.0', 'BSD 3-Clause', 'None'],
  },
  {
    type: 'input',
    name: 'github',
    message: 'GitHub Username:',
  },
  {
    type: 'input',
    name: 'email',
    message: 'Email Address:',
  },
];

// README Template
function generateREADME(data) {
  return `
# ${data.title}

## Description
${data.description}

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [Tests](#tests)
- [License](#license)
- [Questions](#questions)

## Installation
${data.installation}

## Usage
${data.usage}

## Contributing
${data.contributing}

## Tests
${data.tests}

## License
This project is licensed under the ${data.license} license.

## Questions
If you have any questions, feel free to reach out:
- GitHub: [${data.github}](https://github.com/${data.github})
- Email: ${data.email}
  `;
}

// အချက်အလက်များထည့်ပြီး README.md ဖိုင်အဖြစ် ဖန်တီးခြင်း
inquirer.prompt(questions).then((answers) => {
  const readmeContent = generateREADME(answers);
  fs.writeFile('README.md', readmeContent, (err) =>
    err ? console.log(err) : console.log('README.md file created successfully!')
  );
});
