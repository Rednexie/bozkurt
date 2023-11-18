// Import the readline module
const readline = require('readline');

// Create a readline interface instance
const rl = readline.createInterface({
  input: process.stdin, // Use the standard input device as the input stream
  output: process.stdout // Use the standard output device as the output stream
});

// Define a function that takes a prompt string as an argument and returns a promise that resolves with the user input
function input(prompt) {
  return new Promise((resolve, reject) => {
    // Use the question method to write the prompt to the output stream and wait for the user input
    rl.question(prompt, (answer) => {
      // Resolve the promise with the answer
      resolve(answer);
      // Close the readline interface
      rl.close();
    });
  });
}

// Use the input function to get the user input and print it to the console
input('Enter your name: ').then((name) => {
  console.log(`Hello, ${name}!`);
});
