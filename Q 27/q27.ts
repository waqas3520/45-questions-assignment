// Name  Muhammad Waqas
// Roll No   PIAIC215686
// Batch Batch 47

// Alien Colors #3: Turn your if-else chain from Exercise 5-4 into an if-else chain.
// • If the alien is green, print a message that the player earned 5 points.

// • If the alien is yellow, print a message that the player earned 10 points.

// • If the alien is red, print a message that the player earned 15 points.

// • Write three versions of this program, making sure each message is printed for the appropriate color alien.


const alienColor: string = "yellow";

if (alienColor === "green") {
  console.log("Player earned 5 points for shooting the green alien.");
} else if (alienColor === "yellow") {
  console.log("Player earned 10 points for shooting the yellow alien.");
} else if (alienColor === "red") {
  console.log("Player earned 15 points for shooting the red alien.");
} else {
  console.log("Unknown alien color. No points earned.");
}