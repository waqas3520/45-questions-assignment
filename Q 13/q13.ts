// Name  Muhammad Waqas
// Roll No   PIAIC215686
// Batch Batch 47


// Your Own Array: Think of your favorite mode of transportation, 
// such as a motorcycle or a car, and make a list that stores several examples. 
// Use your list to print a series of statements about these items, 
// such as “I would like to own a Honda motorcycle.”

// Store examples of modes of transportation in an array
let transportation = ["motorcycle", "car", "bicycle", "scooter", "boat"];

// Print statements about each item in the array
for (let t = 0; t < transportation.length; t++) {
  console.log(`I would like to ride a ${transportation[t]}.`);
}