//1. number Type
var salary = 10000; // => assigning explicit type
var Tax = 20000; //=> Type inference
//2. String typez
var address = "MCG"; // => assigning explicit type
var MESSAGE = "Happy coding!"; //=> Type inference
//3. Boolean Type
var isActivate = false; // => assigning explicit type
var isValid = true; //=> Type inference
//4. undefined Type
var price = undefined; // => assigning explicit type
var amount = undefined; //=> Type inference will show any type: dont know why
amount = 500;
amount = "tesing"; // No matter what value you assign to it, type is not gona change.
//5. nulll Type
var book = null; // => assigning explicit type
var notebook = null; //=>  Type inference will show any type: dont know why
notebook = "any type"; //// No matter what value you assign to it, type is not gona change.
//------------------------------------Non-Primitive-----------------------------------------
//6. Array Type :
var diet = ["Banana-1/2", "chicken-1kg", "peanutbuttor", "milkshek"]; // => assigning explicit type
var reps = [16, 14, 10, 8]; // type inference-> number[]
var mix = [12, "12", true]; // => let mix: (string | number | boolean)[]
//7. object Type :
var missingObj = { location: "", time: "", date: new Date() };
var Biceps = {
  workout: "Barbell Curl",
  reps: [16, 12, 10],
}; // => assigning explicit type let Biceps: { workout: string;reps: number[];} adding extra props not allowed
var Leg = {
  workout: "Deadlifting",
  reps: [22, 16, 10],
  weight: [30, 40, 50],
}; // =>type inference let Leg: {workout: string;reps: number[];weight: number[];}
//Leg.day = "saturday" => not allowed as day is not part of Leg property
//8. Tuple type
// Tuple is nothing but the array having two constraint 1:array lenght is fixed 2: type of array element is pre-defined
var bikeInfo;
bikeInfo = ["Honda shine", 4030, "80km per litter"];
//9. enum Type
//special types of type in ts which holds the named constant values
//10. The TypeScript any type allows you to store a value of any type. It instructs the compiler to skip type checking.
var unknownData;
unknownData = "test";
unknownData = 300;
unknownData = { prop1: "", prop2: "" };
//11. never type
//The never type contains no value.
//The never type represents the return type of a function that always throws an error or a function that contains an indefinite loop.
var hold;
// hold = 'flask' => Type 'string' is not assignable to type 'never'
var riding = function (message) {
  // => const riding: (message: string) => never
  throw new Error(message);
};
//12. union type
//A TypeScript union type allows you to store a value of one or serveral types in a variable.
var studentId;
studentId = 1000;
studentId = "0033";
// studentId ={id: 1000}; not valid assignment
// studentId = false;
var doArithmatic = function (x, y) {
  if (typeof x === "number" && typeof y === "number") {
    return x + y;
  } else if (typeof x === "string" && typeof y === "string") {
    return x.concat(y);
  }
  throw new Error("Invalid input Provided!");
};
console.log(doArithmatic(20, 30));
