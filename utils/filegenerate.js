const createFile = (answers) => {
    return `
# ${answers.projectTitle}
![badge](https://img.shields.io/badge/License-${answers.license}-green.svg)<br />
## Description
${answers.description}
## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [Description](#description)
- [Tests](#tests)
- [License](#license)
- [Questions](#questions)
- [Contact](#contact)
<a name="installation"></a>
## Installation :floppy_disk:
${answers.installation}
<a name="usage"></a>
## Usage
${answers.usage}
<a name="contributing"></a>
## Contributing
${answers.contributing}
<a name="tests"></a>
## Tests
${answers.tests}
## License
This application is covered by the ${answers.license} license(s). 
<a name="questions"></a>
## Questions
${answers.questions}<br />
<a name="contact"></a>
## Contact
<br />
Find me at: [](https://github.com/${answers.username})
*****
<br />
Email me with any questions: ${answers.email}
*****
<br />
_This README was generated by [Readme-generator](https://github.com/AGr2020Xman/Readme_Generator)_
`

}

module.exports = createFile;