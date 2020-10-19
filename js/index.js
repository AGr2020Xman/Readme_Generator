const fs = require("fs").promises;
// fs exported as promises for now
const util = require("util");
const readFileAsync = util.promisify(fs.readFile);
const writeToFileAsync = util.promisify(fs.writeFile);
const { prompt } = require("inquirer");
// const

const promptUser = async () => {
    // read the json file
    try{
    const questionsJSON = await readFileAsync("questions.json", "utf-8")
    const questions = JSON.parse(questionsJSON)

    if (questions) {
        return await prompt(questions)
            .then((answers) => answers)
    }
    } catch (error) {
        console.error("Error accessing question or answer data:", error)
    }

}

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
