const fs = require("fs");
const util = require("util");
const promptUser = require("./js/promptUser");
const createFile = require("./utils/filegenerate");
const writeToFileAsync = util.promisify(fs.writeFile);


// function to initialize program
init = async () => {
    try {
        const answers = await promptUser();
        const generatedReadme = createFile(answers);
        await writeToFileAsync('./generatedReadme/demo_README.md', generatedReadme, 'utf8');
    } catch (err) {
        if (err) {
            console.error('There was an error, please try again', err)
        }
    }
    console.log("Successfully created readme file!")
}

// function call to initialize program
init();
