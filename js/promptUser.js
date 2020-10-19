const { prompt } = require("inquirer");
const util = require("util");
const fs = require("fs");
const readFileAsync = util.promisify(fs.readFile);



const promptUser = async () => {
    // read the json file
    try{
    const questionsJSON = await readFileAsync("questions.json", "utf-8").then((data)=>data);
    const questions = JSON.parse(questionsJSON);

    if (questions) {
        return await prompt(questions)
            .then((answers) => answers);
    }
    } catch (error) {
        console.error("Error accessing question or answer data:", error);
    }

}

promptUser()

module.exports = promptUser