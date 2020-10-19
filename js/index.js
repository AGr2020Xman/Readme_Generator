// array of questions for user
const questions = [

];

// function to write README file
writeToFile = (fileName, data) => {
}

// function to initialize program
init = async () => {
    try {
        const input = await promptUser();
        const generatedReadme = await writeToFile(input);
    } catch (error) {
        if (error) {
            console.log('There was an error, please try again')
        }
    }
    console.log("Success")
}

// function call to initialize program
init();
