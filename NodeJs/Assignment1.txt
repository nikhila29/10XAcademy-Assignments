// Assignment 1:
// Create an index.js file, write a getNameFromCommandLine function that prints a name.
//  Accept the name as arguments from the command itself
// Set an environment variable called name with your name as value. 
// Write another function getNameFromEnv that prints the name from environment variable
// Write another function getNameFromReadLine that accepts name as answer from the
 //terminal using readline and print the name as output(PS F:\NodeJs> node Assignment1.js Nikhila
// [
//     'C:\\Program Files\\nodejs\\node.exe',
//     'F:\\NodeJs\\Assignment1.js',
//     'Nikhila'
//   ])



const readline=require("readline");

// function getNameFromCommandLine(){
//     console.log(process.argv)
// }
// getNameFromCommandLine();

function getNameFromCommandLine(){
    console.log(process.argv[2]+""+process.argv[3]);
}
function getNameFromEnv(){
    console.log(process.env.NAME);
}
// getNameFromEnv();

const x=readline.createInterface({
    input:process.stdin,
    output:process.stdout,
});

x.question("what is your Name", ans => {
    console.log(ans)
})