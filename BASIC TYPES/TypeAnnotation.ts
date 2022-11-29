//TypeScript uses type annotations to explicitly specify types for identifiers such variables, functions, objects, etc.

//primitive
let state: string = "Maharashtra";
let contact: number;
contact = 985857489;
//contact = "985857489" => Type 'string' is not assignable to type 'number
let isValid: boolean = true;
let isRecordExist: undefined;

//non-primitive

let hobbies: string[];
hobbies = ["Reading", "Cycling", "Programming"];

let person2: { name: string; age: number; salary: number } = {
  name: "Jack",
  age: 12,
  salary: 40000,
  //address: 'ayodhya' =>Object literal may only specify known properties, and 'address' does not exist in type
};

//Function arguments & return types

let greetingFun: (name: string) => string;
greetingFun = (name: string) => {
  return `Hi ${name}`;
};

console.log(greetingFun("Srock"));

let fetchRecords: (userId: number | string) => {
  id: number | string;
  productName: string;
  price: number;
  inStock: boolean;
};

let fetchRecords2 = (
  userId: number | string
): {
  id: number | string;
  productName: string;
  price: number;
  inStock: boolean;
} => {
  return {
    id: userId,
    productName: "Laptop",
    price: 3000000,
    inStock: true,
  };
};

console.log(fetchRecords2(10));
