// Name  Muhammad Waqas
// Roll No   PIAIC215686
// Batch Batch 47
// Dinner Guests: Working with one of the programs from Exercises 14 through 18, 
// print a message indicating the number of people you are inviting to dinner.

// Original guest list
const guestList = ["Taimoor", "Azhar", "Sana", "Bilal", "Sobia", "Sajid", "Zafar", "Aslam"];
// Print the number of guests
console.log(`Number of guests invited: ${guestList.length}`);

// Print the guests' names
for (let i = 0; i < guestList.length; i++) {
  console.log(`Guest ${i + 1}: ${guestList[i]}`);};