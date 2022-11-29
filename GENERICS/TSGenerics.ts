//Use TypeScript generics to develop reusable, generalized, and type-safe functions, interfaces, and classes.

const getRandomElementNumber = (element: number[]): number => {
  const randomIndex = Math.floor(Math.random() * element.length);
  return element[randomIndex];
};

const getRandomElementString = (element: string[]): string => {
  const randomIndex = Math.floor(Math.random() * element.length);
  return element[randomIndex];
};

//Creating a new function every time you want to get a random element from a new array type is not scalable.
console.log(getRandomElementNumber([20, 23, 43, 22, 53, 29]));
console.log(getRandomElementString(["blue", "orange", "pink", "yello"]));

//The following shows a generic function that returns the random element from an array of type T:
const getRandoElement = <T>(element: T[]): T => {
  const randomIndex = Math.floor(Math.random() * element.length);
  return element[randomIndex];
};
console.log(getRandoElement<number>([20, 23, 43, 22, 53, 29]));
console.log(getRandoElement<boolean>([true, false, false, true]));
console.log(getRandoElement<string>(["red", "gree", "blue"]));

//Generic functions with multiple types
const combineObjects = <R, S>(element1: R, element2: S) => {
  return {
    ...element1,
    ...element2,
  };
};
let employee = { name: "emily blunt", age: 39 };
let career = { profession: "actress" };
console.log(combineObjects(employee, career));
console.log(combineObjects(employee, [12, 33, 43]));
