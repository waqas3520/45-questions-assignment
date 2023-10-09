//Name	Muhammad Umar Ehsan
//Roll No	PIAIC218449
//Batch	Batch 47
function createCar(manufacturer, model, options = {}) {
    const car = {
        manufacturer,
        model,
        ...options, //spread operator for options
    };
    return car;
}
//Partial<Car> is a TypeScript utility type that makes all properties of the Car type optional.
//This means you can provide some, all, or none of the properties when calling the function.
// Call the function with required and optional information
const myCar = createCar("Toyota", "Camry", { color: "Blue", year: 2022, features: ["GPS", "Leather Seats"] });
// Print the created car object
console.log(myCar);
export {};
