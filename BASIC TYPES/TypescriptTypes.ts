//1. number Type
let salary: number = 10000; // => assigning explicit type
let Tax = 20000; //=> Type inference

//2. String typez
let address: string = "MCG"; // => assigning explicit type
let MESSAGE = "Happy coding!"; //=> Type inference

//3. Boolean Type
let isActivate: boolean = false; // => assigning explicit type
let isValid = true; //=> Type inference

//4. undefined Type
let price: undefined = undefined; // => assigning explicit type
let amount = undefined; //=> Type inference will show any type: dont know why
amount = 500;
amount = "tesing"; // No matter what value you assign to it, type is not gona change.

//5. nulll Type
let book: null = null; // => assigning explicit type
let notebook = null; //=>  Type inference will show any type: dont know why
notebook = "any type"; //// No matter what value you assign to it, type is not gona change.

//------------------------------------Non-Primitive-----------------------------------------

//6. Array Type :
let diet: string[] = ["Banana-1/2", "chicken-1kg", "peanutbuttor", "milkshek"]; // => assigning explicit type
let reps = [16, 14, 10, 8]; // type inference-> number[]
let mix = [12, "12", true]; // => let mix: (string | number | boolean)[]

//7. object Type :
let missingObj: object = { location: "", time: "", date: new Date() };
let Biceps: { workout: string; reps: number[] } = {
  workout: "Barbell Curl",
  reps: [16, 12, 10],
  //weight : 20 => not allowed
}; // => assigning explicit type let Biceps: { workout: string;reps: number[];} adding extra props not allowed

let Leg = {
  workout: "Deadlifting",
  reps: [22, 16, 10],
  weight: [30, 40, 50],
}; // =>type inference let Leg: {workout: string;reps: number[];weight: number[];}
//Leg.day = "saturday" => not allowed as day is not part of Leg property

//8. Tuple type
// Tuple is nothing but the array having two constraint 1:array lenght is fixed 2: type of array element is pre-defined

let bikeInfo: [string, number, string];
bikeInfo = ["Honda shine", 4030, "80km per litter"];

//9. enum Type
//special types of type in ts which holds the named constant values

//10. The TypeScript any type allows you to store a value of any type. It instructs the compiler to skip type checking.
let unknownData: any;
unknownData = "test";
unknownData = 300;
unknownData = { prop1: "", prop2: "" };

//11. never type
//The never type contains no value.
//The never type represents the return type of a function that always throws an error or a function that contains an indefinite loop.
let hold: never;
// hold = 'flask' => Type 'string' is not assignable to type 'never'

const riding = (message: string) => {
  // => const riding: (message: string) => never
  throw new Error(message);
};

//12. union type
//A TypeScript union type allows you to store a value of one or serveral types in a variable.
let studentId: number | string;
studentId = 1000;
studentId = "0033";
// studentId ={id: 1000}; not valid assignment
// studentId = false;

const doArithmatic = (
  x: number | string | any,
  y: number | string | any
): number | string | never => {
  if (typeof x === "number" && typeof y === "number") {
    return x + y;
  } else if (typeof x === "string" && typeof y === "string") {
    return x.concat(y);
  }
  throw new Error("Invalid input Provided!");
};

console.log(doArithmatic(20, false));

//13. type alias
//Use type aliases to define new names for existing types.
type unionType = number | string;

let fees: unionType;
fees = 1000;
fees = "1000";
//fees = false; //==> Type 'boolean' is not assignable to type 'unionType'
let records: unionType[];
records = [20, "texting", , undefined]; // =>Type 'boolean' is not assignable to type 'unionType
type TupleType = [string, string] | [number, number];
let gender: TupleType = ["male", "female"];

//14. A TypeScript string literal type defines a type that accepts specified string literal.

type eventHandler = "click" | "dblclick" | "mouseup" | "mousedown";
let mouseEventHandler: eventHandler = "mousedown";
//-----------OR-----------------
let funHandler: "swimming" | "running" | "reading";
funHandler = "reading";
