console.log(Math.floor(4 / 3));

// Build a program that takes a integer user input
let userInput = prompt("Please enter a number:");
let number = parseInt(userInput);  // Convert input to an integer

if (isNaN(number)) {
  console.log("That's not a valid number!");
} else {
  console.log("You entered the number: " + number);
}

// Check how many digits it contain using a while loop
// with iterated integer division
let count = 0;
while(number > 0) {
    number = Math.floor(number / 10);
    count += 1;
}
console.log(count);
