const fs = require("fs");
// fs exported as promises for now
const util = require("util");
const promptUser = require("./promptUser");
const createFile = require("./filegenerate");
const writeToFileAsync = util.promisify(fs.writeFile);


// function to initialize program
init = async () => {
    try {
        const answers = await promptUser();
        const generatedReadme = createFile(answers);
        await writeToFileAsync('demo_README.md', generatedReadme, 'utf8');
    } catch (err) {
        if (err) {
            console.error('There was an error, please try again', err)
        }
    }
    console.log("Successfully created readme file!")
}

// function call to initialize program
init();
