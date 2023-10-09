// Name  Muhammad Waqas
// Roll No   PIAIC215686
// Batch Batch 47

// Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner, and you have space for only two guests.
// • Start with your program from Exercise 16. Add a new line that prints a message saying that you can invite only two people for dinner.

// • Remove guests from your list one at a time until only two names remain in your list. Each time you pop a name from your list, print a message to that person letting them know you’re sorry you can’t invite them to dinner.

// • Print a message to each of the two people still on your list, letting them know they’re still invited.

// • Remove the last two names from your list, so you have an empty list. Print your list to make sure you actually have an empty list at the end of your program.

// Original guest list as per exercise 16



// Initial guest list
let guestList= ["Taimoor", "Azhar", "Sana", "Bilal", "Sobia", "Sajid", "Zafar", "Aslam"];

// Inform that you can only invite two people
console.log("Sorry, the dinner table can only accommodate two guests.");

// Remove guests one at a time until only two names remain
while (guestList.length > 2) {
  let removedGuest = guestList.pop();
  if (removedGuest) {
    console.log(`Sorry, ${removedGuest}, you are no longer invited to the dinner.`);
  }
}

// Print a message to the two remaining guests
guestList.forEach((guest) => {
  console.log(`Dear ${guest}, you're still invited to the dinner.`);
});

// Remove the last two names from the list to make it empty
guestList.splice(0, 2);

// Print the empty guest list
console.log("Empty guest list:", guestList);
