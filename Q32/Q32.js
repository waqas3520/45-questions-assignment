//Name	Muhammad Umar Ehsan
//Roll No	PIAIC218449
//Batch	Batch 47
// No Users: Add an if test to Exercise 28 to make sure the list of users is not empty.
// • If the list is empty, print the message We need to find some users!
// • Remove all of the usernames from your array, and make sure the correct message is printed.
// Checking Usernames: Do the following to create a program that simulates
//  how websites ensure that everyone has a unique username.
// • Make a list of five or more usernames called current_users.
// • Make another list of five usernames called new_users. Make sure one or two of the 
// new usernames are also in the current_users list.
// • Loop through the new_users list to see if each new username has already been used. 
// If it has, print a message that the person will need to enter a new username. If a username has not been used, print a message saying that the username is available.
// • Make sure your comparison is case insensitive. 
// If 'John' has been used, 'JOHN' should not be accepted.
const current_users = ['John', 'Alice', 'admin', 'Bob', 'Emma']; // Replace with your current usernames
const new_users = ['Alice', 'Eric', 'Sara', 'Admin', 'Olivia']; // Replace with your new usernames
for (let i = 0; i < new_users.length; i++) {
    const newUser = new_users[i];
    const lowerNewUser = newUser.toLowerCase(); // Convert to lowercase for case-insensitive comparison
    if (current_users.includes(lowerNewUser)) {
        console.log(`Username "${newUser}" is already taken. Please enter a new username.`);
    }
    else {
        console.log(`Username "${newUser}" is available.`);
    }
}
export {};
