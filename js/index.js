const fs = require("fs").promises;
// fs exported as promises for now
const util = require("util");
const { prompt } = require("inquirer");
// const

const promptUser = async () => {
    // read the json file
    try{
    const questionsJSON = await readFileAsync()
    const questions = JSON.parse(questionsJSON)

    if (questions) {
        return await prompt(questions)
            .then((answers) => answers)
    }
    } catch (error) {
        console.error("Error accessing question or answer data:", error)
    }

}


const readFileAsync = () => 
    new Promise ((resolve, reject) => {
        fs.readFile("questions.json", "utf-8", (error, data) => {

            if (error) {
                reject(console.error("Error reading questions: ", error));
            }
          
           resolve(questionSet);
          
          });
          
})




// function to write README file
writeToFile = (fileName, data) => {
}

// function to initialize program
init = async () => {
    try {

        const input = await promptUser();
        const generatedReadme = await writeToFile(input);
        await createFile(generatedReadme)
    } catch (error) {
        if (error) {
            console.log('There was an error, please try again')
        }
    }
    console.log("Success")
}

// function call to initialize program
init();
