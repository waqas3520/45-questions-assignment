//Name	Muhammad Umar Ehsan
//Roll No	PIAIC218449
//Batch	Batch 47
// Magicians: Make a array of magician’s names.
//  Pass the array to a function called show_magicians(), which prints the name of each magician in the array.
function show_magicians(magicians) {
    for (let i = 0; i < magicians.length; i++) {
        console.log(magicians[i]);
    }
}
// Array of magician names
const magicianNames = ["Magician1", "Magician2", "Magician3", "Magician4"];
// Call the function to show the magicians
show_magicians(magicianNames);
export {};
