const fs = require("fs").promises;
// fs exported as promises for now
const util = require("util");
const promptUser = require("promptUser")
const writeToFileAsync = util.promisify(fs.writeFile);


// function to initialize program
init = async () => {
    try {
        const input = await promptUser();
        const generatedReadme = await writeToFileAsync(input);
        await createFile(generatedReadme)
    } catch (error) {
        if (error) {
            console.log('There was an error, please try again')
        }
    }
    console.log("Successfully created readme file!")
}

// function call to initialize program
init();
