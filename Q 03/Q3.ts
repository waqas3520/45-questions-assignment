//Name	Muhammad Waqas
//Roll No	PIAIC215686
//Batch	Batch 47

// Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, 
//uppercase, and titlecase.

let Name:string = 'MUHAMMAD WAQAS'; 
console.log(Name.toLowerCase()); // Output: muhammad waqas

let Name1 : string = "umer ameen"; // Output: UMAR AMEEN
console.log(Name1.toUpperCase());    


  let Name3: string= "farhan shah";

 
 
 let titleCaseName: string = Name3.toLowerCase().replace(/\b\w/g, (letter) => letter.toUpperCase());
 console.log(titleCaseName); //Output:Farhan Shah 