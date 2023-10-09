//Name  Muhammad Waqas
//Roll No   PIAIC215686
//Batch Batch 47

// No Users: Add an if test to Exercise 28 to make sure the list of users is not empty.
// • If the list is empty, print the message We need to find some users!

// • Remove all of the usernames from your array, and make sure the correct message is printed.


// Pizzas: Think of at least three kinds of your favorite pizza. 
// Store these pizza names in a array, and then use a for loop to print the name of each pizza.
// • Modify your for loop to print a sentence using the name of the pizza instead of printing 
// just the name of the pizza. For each pizza you should have one line of output containing 
// a simple statement like I like pepperoni pizza.

// • Add a line at the end of your program, outside the for loop, that states how much you like pizza. 
// The output should consist of three or more lines about the kinds of pizza you like and then an additional 
// sentence, such as I really love pizza!

const favoritePizzas: string[] = ["Pepperoni", "Margherita", "Hawaiian"];

for (let i = 0; i < favoritePizzas.length; i++) {
  console.log(`I like ${favoritePizzas[i]} pizza.`);
}

console.log("I really love pizza!");