// Collect input from a user
const input = prompt("Please enter a random number");

// Convert the input to a number
const upper = parseInt(input);

// Use Math.random() and the user's number to generate a random number
const random = Math.floor(Math.random() * upper) + 1;

// Create a message displaying the random number
console.log(`${random} is a random number between 1 and ${upper}.`);