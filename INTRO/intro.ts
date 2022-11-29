//introduce optional types to javascript
const firstName: string = "Vivekanand";
console.log(firstName);

const prop1 = "name";
const prop2 = "salary";

const person = {};
person[prop1] = "Vivekanand";
person[prop2] = 40000000;

console.log(person);

//TS will help you to fix buggy code
const performAddition = (x, y) => {
  return x + y;
};

let result = performAddition(4, 5);
console.log(result);
//This will create an issue with plain js code. We can avoid this by using type guard or opation types feature of ts
result = performAddition("4", 8);
console.log(result);

const performAddition2 = (x: number, y: number): number => {
  return x + y;
};

let res2 = performAddition2(4, 5);
//Not allowed :Argument of type 'string' is not assignable to parameter of type 'number'.
//res2 = performAddition2("5", 8);
