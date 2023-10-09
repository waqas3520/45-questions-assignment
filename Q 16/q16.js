"use strict";
// Name  Muhammad Waqas
// Roll No   PIAIC215686
// Batch Batch 47
// More Guests: You just found a bigger dinner table, so now more space is available. Think of three more guests to invite to dinner.
// • Start with your program from Exercise 15. Add a print statement to the end of your program informing people that you found a bigger dinner table.
// • Add one new guest to the beginning of your array.
// • Add one new guest to the middle of your array. • Use append() to add one new guest to the end of your list. 
// • Print a new set of invitation messages, one for each person in your list.
// Original guest list
let guestList = ["Taimoor", "asma", "Sana", "Sobia", "Sajid"];
// Print the guest who can't make it
let guestWhoCantMakeIt = guestList[1]; // Assuming the second person can't make it
console.log(`${guestWhoCantMakeIt} can't make it to the dinner.`);
// Replace the guest who can't make it with a new person
let newGuest = "Azhar";
guestList[1] = newGuest;
// Print a second set of invitation messages for the updated guest list
for (let i = 0; i < guestList.length; i++) {
    console.log(`Dear ${guestList[i]}, you are cordially invited to dinner. We would be honored to have your presence.`);
}
// Inform about the bigger dinner table
console.log("Good news! I would like to inform all of you that We found a bigger dinner table.");
// Add new guests using pop() and push()
guestList.push("Zafar"); // Add at the end using push()
guestList.splice(guestList.length / 2, 0, "Bilal"); // Add in the middle using splice()
guestList.push("Aslam"); // Add at the end using push()
// Print new invitation messages for the updated guest list
for (let i = 0; i < guestList.length; i++) {
    console.log(`Dear ${guestList[i]}, you are cordially invited to dinner. We would be honored to have your presence.`);
}
;
